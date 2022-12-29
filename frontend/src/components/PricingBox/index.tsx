import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { PricingBoxPropos } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({
  totalPrice,
  numberInstallments,
  priceInstallment,
  benefits,
  button
}: PricingBoxPropos) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R${totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{numberInstallments}x de </span>R${priceInstallment}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList dangerouslySetInnerHTML={{ __html: benefits }} />

    <Button
      href={button.url} //https://www.udemy.com/course/react-avancado/?couponCode=MENORPRECO
      onClick={onClick}
      withPrice
    >
      <p>{button.label}</p>
      <div>
        <S.ButtonDiscountPrice>
          R${numberInstallments * priceInstallment}
        </S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
