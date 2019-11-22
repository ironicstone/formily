import { ButtonProps } from 'antd/lib/button'
import { FormProps, FormItemProps as ItemProps } from 'antd/lib/form'
import {
  StepsProps as StepProps,
  StepProps as StepItemProps
} from 'antd/lib/steps'
import {
  ISchemaFormProps,
  IMarkupSchemaFieldProps,
  ISchemaFieldComponentProps
} from '@uform/react-schema-renderer'
import { StyledComponent } from 'styled-components'

type ColSpanType = number | string

export type IAntdSchemaFormProps = ISchemaFormProps &
  FormProps &
  IFormItemTopProps

export type IAntdSchemaFieldProps = IMarkupSchemaFieldProps

export interface ISubmitProps extends ButtonProps {
  onSubmit?: ISchemaFormProps['onSubmit']
  showLoading?: boolean
}

export interface IResetProps extends ButtonProps {
  forceClear?: boolean
  validate?: boolean
}

export type IFormItemTopProps = React.PropsWithChildren<
  Exclude<
    Pick<ItemProps, 'prefixCls' | 'labelCol' | 'wrapperCol' | 'labelAlign'>,
    'labelCol' | 'wrapperCol'
  > & {
    inline?: boolean
    className?: string
    style?: React.CSSProperties
    labelCol?: number | { span: number; offset?: number }
    wrapperCol?: number | { span: number; offset?: number }
  }
>

export interface ICompatItemProps
  extends Exclude<ItemProps, 'labelCol' | 'wrapperCol'>,
    Partial<ISchemaFieldComponentProps> {
  labelCol?: number | { span: number; offset?: number }
  wrapperCol?: number | { span: number; offset?: number }
}

export type StyledCP<P extends {}> = StyledComponent<
  (props: React.PropsWithChildren<P>) => React.ReactElement,
  any,
  {},
  never
>

export type StyledCC<Props, Statics = {}> = StyledCP<Props> & Statics

export interface IFormButtonGroupProps {
  sticky?: boolean
  style?: React.CSSProperties
  itemStyle?: React.CSSProperties
  className?: string
  align?: 'left' | 'right' | 'start' | 'end' | 'top' | 'bottom' | 'center'
  triggerDistance?: number
  zIndex?: number
  span?: ColSpanType
  offset?: ColSpanType
}

export interface IItemProps {
  title?: React.ReactText
  description?: React.ReactText
}

export interface IFormItemGridProps extends IItemProps {
  cols?: Array<number | { span: number; offset: number }>
  gutter?: number
}

export interface IFormTextBox extends IItemProps {
  text?: string
  gutter?: number
}

export interface IFormStep extends StepProps {
  dataSource: StepItemProps[]
}