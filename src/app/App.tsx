import { FC, ReactNode } from 'react'
import './App.css'
import { Navigator } from '../navigator/Navigator'
import { Background } from '../background/Background'
import { AppStateProvider } from '../state/AppState'
import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'

const CustomChakraProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <ChakraProvider>
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
