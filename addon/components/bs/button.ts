import BsBaseComponent from './base';

export interface BsButtonComponentArgs {
  isSubmit?: boolean;
  size?: 'sm' | 'lg';
  outline?: boolean;
  color?: string; // = 'secondary';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export default class BsButtonComponent<Args extends BsButtonComponentArgs = BsButtonComponentArgs> extends BsBaseComponent<Args> {}
