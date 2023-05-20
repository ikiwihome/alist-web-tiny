import { Flex, VStack, Image, Anchor, Tooltip } from "@hope-ui/solid"
import { For, JSXElement } from "solid-js"
import { useRouter, useLink } from "~/hooks"
import { objStore } from "~/store"
import { ObjType } from "~/types"
import { convertURL } from "~/utils"
import Artplayer from "artplayer"
import { SelectWrapper } from "~/components"

Artplayer.PLAYBACK_RATE = [0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4]

const players: { icon: string; name: string; scheme: string }[] = [
]

export const VideoBox = (props: { children: JSXElement }) => {
  const { replace } = useRouter()
  const { currentObjLink } = useLink()
  let videos = objStore.objs.filter((obj) => obj.type === ObjType.VIDEO)
  if (videos.length === 0) {
    videos = [objStore.obj]
  }

  return (
    <VStack w="$full" spacing="$2">
      {props.children}
      <SelectWrapper
        onChange={(name: string) => {
          replace(name)
        }}
        value={objStore.obj.name}
        options={videos.map((obj) => ({ value: obj.name }))}
      />
    </VStack>
  )
}
