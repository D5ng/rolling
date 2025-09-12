import { ShareIcon } from "@/shared/assets/icons"
import { Button } from "@/shared/design-system/button"
import { Dropdown, DropdownItem, DropdownList, DropdownPortal, DropdownTrigger } from "@/shared/design-system/dropdown"

export default function SharedButton() {
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outlined" className="w-9 h-8 flex items-center justify-center">
          <ShareIcon className="w-5 h-5" />
        </Button>
      </DropdownTrigger>
      <DropdownPortal>
        <DropdownList>
          <DropdownItem>카카오톡 공유</DropdownItem>
          <DropdownItem>URL 공유</DropdownItem>
        </DropdownList>
      </DropdownPortal>
    </Dropdown>
  )
}
