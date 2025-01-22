import './button.css';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        mode,
        disabled ? 'storybook-button--disabled' : ''
      ].join(' ')}
      style={{
        backgroundColor: disabled ? '#ccc' : backgroundColor,
        color: disabled ? '#666' : 'black',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
