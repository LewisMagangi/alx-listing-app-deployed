// Card component props interface
export interface CardProps {
  title: string;
  description: string;
  image: string;
  price?: number;
  location?: string;
  rating?: number;
  onClick?: () => void;
  className?: string;
}

// Button component props interface
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}


// Property listing interface for PROPERTYLISTINGSAMPLE
export interface PropertyProps {
  id?: string;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
  description?: string;
}

// API Response interface
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
