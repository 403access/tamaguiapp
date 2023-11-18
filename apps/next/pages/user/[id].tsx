import { UserDetailScreen } from 'app/features/user/detail-screen'
import Head from 'next/head'

import { useState } from 'react'
import {
  H5,
  Separator,
  SizableText,
  Tabs,
  TabsContentProps,
} from 'tamagui'

export default function Page({ id }: any) {
  return (
    <>
      <Head>
        <title>{id}</title>
      </Head>
      <VerticalTabs />
    </>
  )
}

const VerticalTabs = () => {
  return (
    <Tabs
      defaultValue="tab1"
      flexDirection="row"
      orientation="vertical"
      width={400}
      borderRadius="$4"
      borderWidth="$0.25"
      overflow="hidden"
      borderColor="$borderColor"
    >
      <Tabs.List
        disablePassBorderRadius="end"
        aria-label="Manage your account"
        separator={<Separator />}
      >
        <Tabs.Tab value="tab1">
          <SizableText>Profile</SizableText>
        </Tabs.Tab>
        <Tabs.Tab value="tab2">
          <SizableText>Connections</SizableText>
        </Tabs.Tab>
        <Tabs.Tab value="tab3">
          <SizableText>Notifications</SizableText>
        </Tabs.Tab>
      </Tabs.List>
      <Separator vertical />
      <TabsContent value="tab1">
        <H5 textAlign="center">Profile</H5>
      </TabsContent>
      <TabsContent value="tab2">
        <H5 textAlign="center">Connections</H5>
      </TabsContent>
      <TabsContent value="tab3">
        <H5 textAlign="center">Notifications</H5>
      </TabsContent>
    </Tabs>
  )
}

const TabsContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content
      backgroundColor="$background"
      key="tab3"
      padding="$2"
      alignItems="center"
      justifyContent="center"
      flex={1}
      borderColor="$background"
      borderRadius="$2"
      borderTopLeftRadius={0}
      borderTopRightRadius={0}
      borderWidth="$2"
      {...props}
    >
      {props.children}
    </Tabs.Content>
  )
}