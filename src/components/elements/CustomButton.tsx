import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends Omit<ButtonProps, 'children'> {
  label: string;
}

const CustomButton = (props: CustomButtonProps) => {
  const { label, ...otherProps } = props;

  return (
    <Button
      sx={{
        textTransform: 'none',
        backgroundColor: '#fc3468',
        color: 'white',
        width: '100%',
        px: 4,
        py: 2,
        borderRadius: '100px',
        '&:hover': {
          backgroundColor: '#ff084a',
        },
      }}
      {...otherProps}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
