import { BigNumber } from 'ethers'
import styled, { css } from 'styled-components'
import { formatFixed, parseFixed } from '@ethersproject/bignumber'

export const StyledInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    background-color: transparent;
    border: 0; // 1px solid red; //0
    outline: none;
    font-family: ${theme.font.family.neue};
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
    color: ${theme.colors.gray300};
  `}
`

type TokenInputProps = {
  // label: string
  value: string
  tokenBalance: BigNumber | undefined
  tokenIcon?: React.ReactNode
  onChange: (e: any) => void
  decimals?: number
  disabled?: boolean
  placeholder?: string
  maxValue?: BigNumber
  isNativeToken?: boolean
}

export default function TokenInput({
  // label,
  value,
  disabled,
  tokenBalance,
  maxValue,
  decimals,
  placeholder = '0',
  onChange,
  isNativeToken = false
}: TokenInputProps) {
  //@TODO: Add unit tests to this - ensure it doesn't overflow or underflow
  const handleTokenInputChange = (e: any) => {
    try {
      const { value } = e.target
      const decimalRegexp = /^\d*(?:[.,])?\d{0,18}$/
      const decimalEnforcer = (nextUserInput: string) => {
        if (nextUserInput === '') {
          return undefined
        } else if (nextUserInput === '.') {
          return '0.'
        } else if (decimalRegexp.test(nextUserInput)) {
          return nextUserInput
        }
        return null
      }

      const maxAllowedValue = maxValue
        ? maxValue.gte(tokenBalance || 0)
          ? maxValue
          : tokenBalance
        : tokenBalance

      const formattedMaxAllowedValue = formatFixed(
        (maxAllowedValue && maxAllowedValue) || BigNumber.from(0),
        decimals
      )

      // let nextValueMobile: boolean | string = false
      // if (isMedium) {
      //   nextValueMobile = roundDecimalValue(formattedMaxAllowedValue, 10)
      // }

      const nextInput = decimalEnforcer(value.replace(/,/g, '.'))

      if (
        parseFixed(nextInput || formattedMaxAllowedValue, decimals).gt(
          parseFixed(formattedMaxAllowedValue, decimals)
        )
      ) {
        onChange(formattedMaxAllowedValue)

        return
      }

      if (nextInput !== null) {
        onChange(nextInput ?? '')
      }
    } catch (err) {
      console.error('error on inputChange', err)
    }
  }

  return (
    <StyledInput
      // label={label}
      name="depositAmount"
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      onChange={(e) => handleTokenInputChange(e)}
      autoComplete="off"
      // icon={
      //   <div
      //     onClick={() => {
      //       if (tokenBalance) {
      //         const formattedBal = formatBNToFixed(
      //           isNativeToken ? ninetyEightPercent(tokenBalance) : tokenBalance,
      //           decimals
      //         )
      //         if (isMedium) {
      //           const nextValueMobile = roundDecimalValue(formattedBal, 10)
      //           onChange(nextValueMobile)
      //           return
      //         }
      //         onChange(formattedBal)
      //       }
      //     }}
      //   >
      //     <Typography type="BODY_L">MAX</Typography>
      //   </div>
      // }
    />
  )
}
