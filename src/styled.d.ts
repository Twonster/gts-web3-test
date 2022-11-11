import { DefaultAppTheme } from './types/styled';
import 'styled-components';

declare module 'styled-components' {
  export type DefaultTheme = DefaultAppTheme
}
