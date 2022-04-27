import React from 'react'
import { Dropdown, Menu ,Image} from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right"  src="https://i4.hurimg.com/i/hurriyet/75/770x0/5ac3577718c7731370bbb8ad.jpg"/>
            <Dropdown pointing="top left" text="Melike">
               <Dropdown.Menu>
                   <Dropdown.Item text="Bilgilerim" icon="info"/>
                   <Dropdown.Item onClick={signOut} text="Çıkış Yap"  icon="sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
