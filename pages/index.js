import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Heading, Link, Text, Code, Flex, Box } from "@chakra-ui/react"
import Weather from './Weather'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      <Heading as="h1" size="2xl" mb="2">
        <Link color="teal" href="https://nextjs.org">Helsinki weather</Link>
      </Heading>

      <Text fontSize="xl" mt="2">
        sub-heading here <Code></Code>
        </Text>

        <Flex flexWrap="wrap" alignItems="center" justifyContent="center" maxW="800px" mt="10">

          <Box as="a" href="https://nextjs.org/docs" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
            <Heading as="h3" size="lg" mb="2">      Current weather:  <Weather /></Heading>
            <Text fontSize="lg"></Text>
            </Box>

          <Box as="a" href="https://www.youtube.com/watch_popup?v=CvOB-Is_yYU&autoplay=1" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
            <Heading as="h3" size="lg" mb="2">Helsinki live</Heading>
            <Text fontSize="lg">Click here for live view of Helsinki harbour</Text>
            </Box>



          <Box as="a" href="https://nextjs.org/learn" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
            <Heading as="h3" size="lg" mb="2">insert temperature data here</Heading>
            <Text fontSize="lg"></Text>
            </Box>

          <Box as="a" href="https://github.com/vercel/next.js/tree/master/examples" p="6" m="4" borderWidth="1px" rounded="lg" flexBasis={['auto', '45%']}>
            <Heading as="h3" size="lg" mb="2">insert humidity data here</Heading>
            <Text fontSize="lg"></Text>
            </Box>

        </Flex>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
