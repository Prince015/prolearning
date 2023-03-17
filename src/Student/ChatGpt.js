import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { Button, Input } from 'antd'
import React, { useEffect } from 'react'

function ChatGpt() {

    return (
        // <div style={{ height: "calc(100vh - 4rem)" }} className='  flex-col flex '>
        <>
            <div style={{ height: "calc(100vh - 9rem)" }} className='px-3 py-2 flex-1 overflow-y-auto '>
                hi
            </div>
            <div className='h-20 bg-white box-border sticky bottom-0'>
                <Input className='h-12 my-2' suffix={<Button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                </Button>} />
            </div>
            {/* </div> */}
        </>
    )
}

export default ChatGpt