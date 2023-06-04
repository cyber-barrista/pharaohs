import { FC, ReactNode } from 'react'
import './App.css'
import { Navigator } from '../navigator/Navigator'
import { Background } from '../background/Background'
import { AppStateProvider } from '../state/AppState'
import { CSSReset, ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Global } from '@emotion/react'

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "inherit",
      },
    },
  },
});

const CustomChakraProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <ChakraProvider theme={customTheme}>
    <CSSReset />
    <Global
      styles={{
        body: {
          backgroundColor: "transparent",
        },
      }}
    />
    {children}
  </ChakraProvider>
)


function App() {
  return (
    <AppStateProvider>
      <CustomChakraProvider>
        <Navigator />
        <Background />
      </CustomChakraProvider>
    </AppStateProvider>
  )
}

export default App
