type Authocompleate = 'email';
export interface TextInputComponentProps {
  value: string;
  onChangeText: (name: string, value: string) => void;
  name: string;
  style: any;
  placeholder: string;
  placeholderTextColor: string;
  secureTextEntry?: boolean;
  autoComplete?: Authocompleate;
}
