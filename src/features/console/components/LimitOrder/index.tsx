import { useThemeContext } from '@/hooks/themeProvider'
import {
  Button,
  CloseButtonBox,
  DownArrow,
  FlexContainer,
  HrLine,
  LightPanel,
  LogoViewer,
  RightArrow,
  TooltipBox,
  Typography,
  localStorageService,
  multiplyBNWithFloat
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

export default function LimitOrder() {
  const { theme } = useThemeContext()

  const [userAssets, setUserAssets] = React.useState<TAsset[]>([])
  const [allAssets, setAllAssets] = React.useState<TAsset[]>([])
  const [isUserAssetView, setIsUserAssetView] = React.useState(false)
  const [isOrderHistoryView, setIsOrderHistoryView] = React.useState(false)

  const fetchAllAssets = async () => {
    // TODO: change chain id to xDAI after testing
    const { data } = await apiInstance.get<TAsset[]>(API_ENDPOINTS.getAssets(5))
    setAllAssets(data)
  }

  const refreshBalances = async () => {
    if (allAssets.length) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const userData = localStorageService.getAuthUserData()!
      const mainnetProvider = new ethers.providers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_RPC
      )

      const _userAssets = await Promise.all(
        allAssets.map(async (asset) => {
          try {
            const assetAddress = asset.address

            let assetBalanceOf: BigNumber
            if (assetAddress != '0x0000000000000000000000000000000000000000') {
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

            const totalAssetValue = multiplyBNWithFloat(
              assetBalanceOf,
              asset.prices.default
            )
            const formattedBal = formatUnits(assetBalanceOf, asset.decimals)

            return {
              ...asset,
              value: formatUnits(totalAssetValue, asset.decimals),
              balanceOf: {
                decimals: asset.decimals,
                formatted: formattedBal.slice(0, formattedBal.indexOf('.') + 3),
                symbol: asset.name,
                value: BigNumber.from(totalAssetValue)
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
      setUserAssets(_userAssets)
    }
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
                inputValue={'0'}
                setInputValue={() => console.log('test')}
                setSelectedAsset={(asset) => console.log(asset)}
                selectedAsset={userAssets?.[0]}
                availableAssets={userAssets}
                getMaxTokenBalanceAvailable={BigNumber.from(1e9).mul(1e9)}
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
                  selectedAsset={userAssets?.[0]}
                  availableAssets={userAssets}
                  setSelectedAsset={() => console.log('test')}
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
                  {allAssets[0]?.name || ''} asset price
                </Typography>
                <StyledInput
                  name="depositAmount"
                  value={'0'}
                  onChange={(e) => console.log('test:', e)}
                  autoComplete="off"
                />
              </S.SellReceiveItem>
              <SlippageAmount />
            </FlexContainer>
          </S.DCASwap>

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
            onClick={() => console.log('place order')}
            disabled={false}
          >
            Place order
          </Button>
        </FlexContainer>

        <FlexContainer
          gap={1.6}
          alignItems="center"
          style={{ marginBottom: isUserAssetView ? '1.5vh' : '3vh' }}
        >
          <CloseButtonBox
            icon={isOrderHistoryView ? <DownArrow /> : <RightArrow />}
            closeButtonClick={() => setIsOrderHistoryView(!isOrderHistoryView)}
          />
          <Typography type="TITLE_M">Order History</Typography>
        </FlexContainer>
      </S.DCAWrapper>
    </>
  ) : (
    <></>
  )
}
