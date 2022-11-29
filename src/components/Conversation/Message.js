import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from './MsgTypes'

const Message = () => {
  return (
    <Box p={3}>
        <Stack spacing={3}>
        {Chat_History.map((el) => {
            switch (el.type) {
                case "divider":
                    // Timeline
                    return <Timeline el={el}/>
                    
                case "msg":
                    switch (el.subtype) {
                        case "img":
                            return <MediaMsg el={el} />
                            break;
                        case "doc":
                            // Document msg
                            return <DocMsg el={el} />
                            break;
                        case "link":
                            // Linkmsg
                            return <LinkMsg el={el}/>
                            break;
                        case "reply":
                            // reply msg
                            return <ReplyMsg el={el}/>
                            break;
                    
                        default:
                            //texts
                            return <TextMsg el={el}/>
                            break;
                    }
                    break;
            
                default:
                    return <></>;
            }
        })}
        </Stack>
    </Box>
  )
}

export default Message