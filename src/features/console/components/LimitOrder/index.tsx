/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useThemeContext } from '@/hooks/themeProvider'
import {
  Button,
  CloseButtonBox,
  DelayedLottiesLoading,
  DownArrow,
  ErrorOutline,
  FlexContainer,
  HrLine,
  LightPanel,
  LoaderLottie,
  LogoViewer,
  RightArrow,
  SendIcon,
  TooltipBox,
  Typography,
  localStorageService
} from '@/features/shared'
import MinERC20 from '@/features/shared/assets/abi/minERC20.json'
import * as webauthn from '@passwordless-id/webauthn'
import React from 'react'
import * as S from './styles'
import { InputAssetSelector, InputField } from '@/features/spotlight'
import { BigNumber, ethers } from 'ethers'
import { StyledInput } from '@/features/shared/components/TokenInput'
import SlippageAmount from './SlippageAmount'
import { TAsset } from '../../types'
import { formatUnits } from 'ethers/lib/utils.js'
import { API_ENDPOINTS, apiInstance } from '@/lib/axios'
import Link from 'next/link'

const mockOrders = [
  {
    orderId: 1,
    txHash: 'https://www.google.com',
    logo: 'https://brahma-static.s3.us-east-2.amazonaws.com/Asset/Asset%3DGNO.svg'
  },
  {
    orderId: 2,
    txHash: 'https://www.amazon.in',
    logo: 'https://brahma-static.s3.us-east-2.amazonaws.com/Asset/Asset%3DGNO.svg'
  }
]

export default function LimitOrder() {
  const { theme } = useThemeContext()

  const [userAssets, setUserAssets] = React.useState<TAsset[]>([])
  const [allAssets, setAllAssets] = React.useState<TAsset[]>([])
  const [isUserAssetView, setIsUserAssetView] = React.useState(false)
  const [isOrderHistoryView, setIsOrderHistoryView] = React.useState(false)

  const [sellAsset, setSellAsset] = React.useState<TAsset>()
  const [buyAsset, setBuyAsset] = React.useState<TAsset>()
  const [sellAmount, setSellAmount] = React.useState<string>('')

  const maxSellAssetBalance = React.useMemo(
    () => sellAsset?.balanceOf?.value || BigNumber.from(0),
    [sellAsset]
  )

  const isSellAmountValid = React.useMemo(
    () => sellAmount === '' || parseFloat(sellAmount) > 0,
    [sellAmount]
  )

  const fetchAllAssets = async () => {
    // TODO: change chain id to xDAI after testing
    const { data } = await apiInstance.get<TAsset[]>(API_ENDPOINTS.getAssets(5))
    setAllAssets(data)
  }

  const refreshBalances = async () => {
    if (allAssets.length) {
      const userData = localStorageService.getAuthUserData()!
      const mainnetProvider = new ethers.providers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_RPC
      )

      const _userAssets = await Promise.all(
        allAssets.map(async (asset) => {
          try {
            const assetAddress = asset.address

            let assetBalanceOf: BigNumber
            if (
              assetAddress !== '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE' &&
              assetAddress !== '0x0000000000000000000000000000000000000000'
            ) {
              const token = new ethers.Contract(
                assetAddress,
                MinERC20,
                mainnetProvider
              )
              assetBalanceOf = await token.balanceOf(userData.safeAddress)
            } else {
              assetBalanceOf = await mainnetProvider.getBalance(
                userData.safeAddress
              )
            }

            const formattedBal = formatUnits(assetBalanceOf, asset.decimals)

            return {
              ...asset,
              value: formatUnits(assetBalanceOf, asset.decimals),
              balanceOf: {
                decimals: asset.decimals,
                formatted: formattedBal.slice(0, formattedBal.indexOf('.') + 3),
                symbol: asset.name,
                value: BigNumber.from(assetBalanceOf)
              }
            }
          } catch (err) {
            console.error('[Error on assetWithValue]', asset.address, err)
            return {
              ...asset,
              value: '0',
              balanceOf: {
                decimals: asset.decimals,
                formatted: '0',
                symbol: asset.name,
                value: BigNumber.from(0)
              }
            }
          }
        })
      )
      console.log('assets', _userAssets)
      setSellAsset(_userAssets[0])
      setBuyAsset(_userAssets[0])
      setUserAssets(_userAssets)
    }
  }

  const handleAuthentication: any = async () => {
    const userData = localStorageService.getAuthUserData()!

    const res = await webauthn.client.authenticate(
      [userData.credentialId],
      window.crypto.randomUUID(),
      { authenticatorType: 'auto' }
    )

    const {
      authenticator: {
        flags: { userVerified }
      }
    } = webauthn.parsers.parseAuthentication(res)
    console.log('isUserVerified', userVerified)
  }

  React.useEffect(() => {
    fetchAllAssets()
  }, [])

  React.useEffect(() => {
    refreshBalances()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allAssets])

  return userAssets.length ? (
    <>
      <FlexContainer
        gap={1.6}
        alignItems="center"
        style={{ marginBottom: isUserAssetView ? '1.5vh' : '3vh' }}
      >
        <CloseButtonBox
          icon={isUserAssetView ? <DownArrow /> : <RightArrow />}
          closeButtonClick={() => setIsUserAssetView(!isUserAssetView)}
        />
        <Typography type="TITLE_M">Your Assets</Typography>
      </FlexContainer>
      {isUserAssetView && (
        <FlexContainer
          gap={1}
          flexDirection="column"
          style={{
            marginBottom: '3vh',
            border: '1.5px solid rgba(255, 255, 255, 0.04)',
            borderRadius: '10px',
            padding: '1rem 2rem'
          }}
        >
          {userAssets.map(({ name, logo, balanceOf }, idx) => (
            <FlexContainer
              key={idx}
              justifyContent="space-between"
              style={{ width: '100%' }}
            >
              <FlexContainer alignItems="center" gap={1} flex={true}>
                <LogoViewer logo={logo} />
                <Typography type="BODY_MEDIUM_M">{name}</Typography>
              </FlexContainer>
              <FlexContainer flex={false}>
                <Typography type="BODY_M">
                  {balanceOf?.formatted || ''}
                </Typography>
              </FlexContainer>
            </FlexContainer>
          ))}
        </FlexContainer>
      )}
      <S.DCAWrapper>
        <LightPanel>
          <S.DCAPanelHeader>
            <FlexContainer gap={1.6} alignItems="center">
              <Typography type="BODY_MEDIUM_S" color={theme.colors.gray300}>
                Limit-Order
              </Typography>
            </FlexContainer>
          </S.DCAPanelHeader>
          <HrLine color={theme.colors.gray700} />
          <S.SellReceiveWrapper>
            <S.SellReceiveItem width={70} flex={false}>
              <InputField
                title="Sell"
                inputValue={sellAmount}
                setInputValue={(amount) => setSellAmount(amount)}
                setSelectedAsset={(asset) => setSellAsset(asset)}
                selectedAsset={sellAsset!}
                availableAssets={userAssets}
                getMaxTokenBalanceAvailable={maxSellAssetBalance}
              />
            </S.SellReceiveItem>
            <S.SellReceiveItem
              justifyContent="space-between"
              flexDirection="column"
              padding="1.6rem"
              width={30}
              flex={false}
            >
              <FlexContainer alignItems="center" flex={false} gap={0.4}>
                <Typography type="BODY_MEDIUM_S" color={theme.colors.gray300}>
                  Receive
                </Typography>
                <TooltipBox
                  tooltipWidth={24}
                  direction="right"
                  content="The amount you receive will vary based on the ETH price during each execution."
                />
              </FlexContainer>
              <FlexContainer alignItems="flex-end">
                <InputAssetSelector
                  hideSecondary
                  selectedAsset={buyAsset!}
                  availableAssets={allAssets}
                  setSelectedAsset={(asset) => setBuyAsset(asset)}
                  searchText="Asset to swap into"
                />
              </FlexContainer>
            </S.SellReceiveItem>
          </S.SellReceiveWrapper>

          <HrLine color={theme.colors.gray700} />
          <S.DCASwap>
            <FlexContainer justifyContent="space-between">
              <S.SellReceiveItem
                width={70}
                flex={false}
                gap={1.2}
                flexDirection="column"
              >
                <Typography type="BODY_MEDIUM_S" color={theme.colors.gray300}>
                  {buyAsset!.name || ''} price in USD
                </Typography>
                <StyledInput
                  name="depositAmount"
                  value={`${buyAsset!.prices.default}`}
                  onChange={(e) => console.log('test:', e)}
                  autoComplete="off"
                />
              </S.SellReceiveItem>
              <SlippageAmount />
            </FlexContainer>
          </S.DCASwap>

          {!isSellAmountValid && (
            <FlexContainer
              padding="0 1.6rem 0 1.6rem"
              style={{ marginBottom: '2rem' }}
            >
              <S.GrayBGDiv borderRadius="0.4rem" margin="0">
                <ErrorOutline
                  color={theme.colors.warning}
                  width={40}
                  height={40}
                />
                <Typography type="BODY_XS" color={theme.colors.gray400}>
                  The amount to swap is too low to place this order as the fees
                  exceed received assets
                </Typography>
              </S.GrayBGDiv>
            </FlexContainer>
          )}

          <S.GrayBGDiv margin="0" borderRadius="0 0 0.8rem 0.8rem">
            <Typography type="BODY_XS" color={theme.colors.gray400}>
              Swaps will be executed when the maximum acceptable price of asset
              to receive is hit.
            </Typography>
          </S.GrayBGDiv>
        </LightPanel>

        <FlexContainer width={100} style={{ marginBottom: '6rem' }}>
          <Button
            buttonSize="L"
            onClick={handleAuthentication}
            disabled={!isSellAmountValid || sellAmount === ''}
          >
            Place order
          </Button>
        </FlexContainer>

        <FlexContainer
          gap={1.6}
          alignItems="center"
          style={{ marginBottom: isOrderHistoryView ? '-1vh' : '3vh' }}
        >
          <CloseButtonBox
            icon={isOrderHistoryView ? <DownArrow /> : <RightArrow />}
            closeButtonClick={() => setIsOrderHistoryView(!isOrderHistoryView)}
          />
          <Typography type="TITLE_M">Order History</Typography>
        </FlexContainer>
        {isOrderHistoryView && (
          <FlexContainer
            gap={1}
            flexDirection="column"
            style={{
              border: '1.5px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '10px',
              padding: '1rem 2rem'
            }}
          >
            {mockOrders.map(({ orderId, txHash, logo }, idx) => (
              <FlexContainer
                key={idx}
                justifyContent="space-between"
                style={{ width: '100%' }}
              >
                <FlexContainer alignItems="center" gap={1} flex={true}>
                  <LogoViewer logo={logo} />
                  <Typography type="BODY_MEDIUM_M">Order #{orderId}</Typography>
                </FlexContainer>
                <FlexContainer flex={false}>
                  <Typography
                    type="BODY_M"
                    style={{
                      alignItems: 'center',
                      display: 'flex'
                    }}
                  >
                    <SendIcon />
                    <Link style={{ marginLeft: '1rem' }} href={txHash}>
                      View Tx
                    </Link>
                  </Typography>
                </FlexContainer>
              </FlexContainer>
            ))}
          </FlexContainer>
        )}
      </S.DCAWrapper>
    </>
  ) : (
    <>
      <FlexContainer
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={2}
        style={{ height: '60vh' }}
      >
        <DelayedLottiesLoading lotties={[LoaderLottie]} />
        <Typography type="BODY_MEDIUM_M">Getting your details ...</Typography>
      </FlexContainer>
    </>
  )
}
