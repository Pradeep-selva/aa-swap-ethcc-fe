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
import * as webauthn from '@passwordless-id/webauthn'
import React from 'react'
import * as S from './styles'
import { InputAssetSelector, InputField } from '@/features/spotlight'
import { BigNumber, ethers } from 'ethers'
import { StyledInput } from '@/features/shared/components/TokenInput'
import SlippageAmount from './SlippageAmount'
import { TAsset } from '../../types'
import { formatUnits } from 'ethers/lib/utils.js'

const mockAssets: TAsset[] = [
  {
    name: 'ETH',
    address: '0x0000000000000000000000000000000000000000',
    logo: 'https://brahma-static.s3.us-east-2.amazonaws.com/Asset/Asset%3DETH.svg',
    decimals: 18,
    chainId: 5,
    prices: { default: 1902.6 },
    apy: 0,
    actions: [] as any,
    value: ''
  },
  {
    name: 'GNO',
    address: '0x02ABBDbAaa7b1BB64B5c878f7ac17f8DDa169532',
    logo: 'https://brahma-static.s3.us-east-2.amazonaws.com/Asset/Asset%3DGNO.svg',
    decimals: 18,
    chainId: 5,
    prices: { default: 1 },
    apy: 0,
    actions: [] as any,
    value: ''
  },
  {
    name: 'WETH',
    address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    logo: 'https://brahma-static.s3.us-east-2.amazonaws.com/Asset/Asset%3DWETH.svg',
    decimals: 18,
    chainId: 5,
    prices: { default: 1903.57 },
    apy: 0,
    actions: [] as any,
    value: ''
  },
  {
    name: 'USDC',
    address: '0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C',
    logo: 'https://brahma-static.s3.us-east-2.amazonaws.com/Asset/Asset%3DUSDC.svg',
    decimals: 6,
    chainId: 5,
    prices: { default: 1 },
    apy: 0,
    actions: [] as any,
    value: ''
  }
]
const minERC20 = [
  // balanceOf
  {
    constant: true,

    inputs: [{ name: '_owner', type: 'address' }],

    name: 'balanceOf',

    outputs: [{ name: 'balance', type: 'uint256' }],

    type: 'function'
  }
]

export default function LimitOrder() {
  const { theme } = useThemeContext()

  const [userAssets, setUserAssets] = React.useState<Array<any>>([])
  const [isUserAssetView, setIsUserAssetView] = React.useState(false)
  const [isOrderHistoryView, setIsOrderHistoryView] = React.useState(false)

  React.useEffect(() => {
    refreshBalances()
  }, [])

  const refreshBalances = async () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const userData = localStorageService.getAuthUserData()!

    const _userAssets = await Promise.all(
      mockAssets.map(async (asset) => {
        try {
          const assetAddress = asset.address

          const mainnetProvider = new ethers.providers.JsonRpcProvider(
            process.env.NEXT_PUBLIC_RPC
          )

          let assetBalanceOf: BigNumber
          if (assetAddress != '0x0000000000000000000000000000000000000000') {
            console.log(userData.safeAddress)
            const token = new ethers.Contract(
              assetAddress,
              minERC20,
              mainnetProvider
            )
            assetBalanceOf = await token.balanceOf(userData.safeAddress)
            console.log(asset.name, assetBalanceOf.toString())
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
          // alignItems="center"
          // justifyContent="center"
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
                <Typography type="BODY_M">{balanceOf.formatted}</Typography>
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
                  {mockAssets[0]?.name || ''} asset price
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

            <FlexContainer justifyContent="space-between"></FlexContainer>
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
            onClick={() => console.log('ordered')}
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
