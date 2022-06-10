import { Image, Text, HStack, Box, VStack, Heading, Button } from "native-base";
import { IMAGE_BASE_URL } from "../../config/api_config";

const Item = ({ navigation, item, mediaType }) => {
    return (
        <HStack space={2} m={2}>
            <Box maxW={"30%"}>
                <Image source={{ uri: `${IMAGE_BASE_URL}/${item.poster_path}` }} alt={item.name ? item.name : item.title} size={'lg'} />
            </Box>

            <Box width={"70%"}>
                <VStack>
                    <Heading fontSize={"sm"}>{item.name ? item.name : item.title}</Heading>
                    <Text style={{ fontSize: 12 }}>Popularity: {item.popularity}</Text>
                    <Text style={{ fontSize: 12 }}>Release Date: {item.release_date}</Text>
                    <Button width={200} padding={2}
                        onPress={() => navigation.navigate("Detail", { id: item.id, mediaType: item.media_type ? item.media_type : mediaType })}>More Details
                    </Button>
                </VStack>
            </Box>
        </HStack>
    )
}
export default Item;