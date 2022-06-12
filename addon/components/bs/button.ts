import BsBaseComponent from './base';

export interface BsButtonComponentArgs {
  isSubmit?: boolean;
  size?: 'sm' | 'lg';
  outline?: boolean;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export default class BsButtonComponent extends BsBaseComponent<BsButtonComponentArgs> {}
