import './button.css';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  color?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  disabled?: boolean;
}

/** Primary UI component for user interaction */
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
