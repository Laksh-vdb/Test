

import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native';
import { ScrollView, Box, NativeBaseProvider, View, Image, AspectRatio, Text, Heading, HStack, Stack, Center } from 'native-base';

const BoxComponent = () => {
  return (
    <ScrollView flexDirection="row">
      {[...Array(5)].map((_, index) => (
        <Box key={index} width={180} rounded={25} overflow="hidden" borderColor="coolGray.200" borderWidth={1} _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700"
        }} _web={{
          shadow: 2,
          borderWidth: 0
        }} _light={{
          backgroundColor: "gray.50"
        }} mx={2}>
          <Box>
            <AspectRatio w="100%" ratio={11 / 9}>
              <Image source={{
                uri: "https://img.freepik.com/premium-photo/asschercut-diamond-featuripng-mesmerizipng-stepcut-pattern-generative-ai_864588-6982.jpg"
              }} alt="image" />
            </AspectRatio>
            <Center bg="violet.500" _dark={{
              bg: "violet.400"
            }} _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs"
            }} position="absolute" bottom="0" px="3" py="1.5">
              Ring
            </Center>
          </Box>
          <Stack p={4} space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                Candeo Diamonds 14K Gold
              </Heading>
              <Text>
                GIA Certified
              </Text>
            </Stack>
            <Text fontWeight="400">
              Candeo Diamonds 14K Gold Diamond Ring With 0.5 Carat Round Shape Natural Diamond For Women
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text color="coolGray.600" _dark={{
                  color: "warmGray.200"
                }} fontWeight="400">
                  6 mins ago
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      ))}
    </ScrollView>
  );
};



const Login = () => {
  return (
    <NativeBaseProvider>
      <View flex={1}><BoxComponent /></View>
    </NativeBaseProvider>
  );
};
export default Login;