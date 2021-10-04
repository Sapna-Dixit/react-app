import React from 'react'
import {Editor} from '@tinymce/tinymce-react'

const EmojiReact = ()=>
{
    return(
        <Editor 
        
            apiKey = 'qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc'
            init = {{
                plugins :"emoticons",
                toobars :"emoticons",
                toolbar_location:"bottom",
                menubar: false,
                statusbar:false,
                height : 450

            }}
            initialValue=""
        
        
        />

    )
}
export default EmojiReact