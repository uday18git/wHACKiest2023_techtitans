import React, { useEffect, useRef, useState } from 'react'
import { BsChatLeftFill } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { GoUnmute, GoMute } from 'react-icons/go'
import { chatState, iconState } from '../../hooks/atoms'
import { useRecoilState } from 'recoil'
import { sendMessage } from './functions'
import Cookies from 'js-cookie'
import { replies } from '@/utils/dummyData'
import Link from 'next/link'


const Index = () => {
    const [iconToShow, setIconToShow] = useRecoilState(iconState);
    const [conversations, setConversations] = useState(Cookies.get('conversations') ? JSON.parse(Cookies.get('conversations')) : []);
    const [sending, setSending] = useState(false);
    const [muted, setMuted] = useState(false);

    //    Scrolling to bottom whenever a message is recieved by user 
    const chatRef = useRef()
    useEffect(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight
        Cookies.set('conversations', JSON.stringify(conversations))
    }, [conversations, sending])
    //    Scrolling to bottom whenever a message is recieved by user 


    // Greeting the user if he is new on the site 
    useEffect(() => {
        if (conversations.length < 1) {
            setTimeout(() => {
                setIconToShow('close')
                sendMessage(setConversations, conversations, setSending, replies[0]);
            }, 2000)
        } else {
            return
        }
    }, [])
    // Greeting the user if he is new on the site 


    // bot replies and audio handled here
    useEffect(() => {
        console.log(conversations[conversations.length - 1])
        if (conversations[conversations.length - 1] && conversations[conversations.length - 1].who === 'bot' && !muted) {
            const audio = new Audio('/sounds/notification.mp3')
            audio.volume = .5
            audio.play()
        }
        if (conversations[conversations.length - 1] && conversations[conversations.length - 1].who === 'user') {
            const id = conversations[conversations.length - 1].id
            const reply = replies.find(conv => conv.replyTo === id)
            if (reply && reply.message) {
                sendMessage(setConversations, conversations, setSending, reply);
            }
        }
    }, [conversations])
    // bot replies and audio handled here

    return (
      <div className="relative">
        <div className="absolute z-50 right-[-20px] bottom-6">
          {/* these are UI logic (like onclick of this btn open the chat and close the chat) */}
          {iconToShow === 'chat' ? (
            <button
              onClick={() => setIconToShow('close')}
              className="p-5 overflow-hidden  group shadow-md transition-all duration-500 flex items-center justify-center bg-green-900 rounded-full text-white"
            >
              <BsChatLeftFill className="text-2xl" />
            </button>
          ) : (
            <button
              onClick={() => setIconToShow('chat')}
              className="p-5 shadow-md transition-all duration-500 flex items-center justify-center bg-gray-900 rounded-full text-white"
            >
              <MdClose className="text-2xl" />
            </button>
          )}
        </div>
        <div
          className={`flex transition-all duration-500 w-[340px]  ${
            iconToShow === 'chat'
              ? 'translate-x-[400px] opacity-0'
              : 'translate-x-[0px] opacity-100'
          } z-20 rounded-xl overflow-hidden shadow-2xl bg-gray-900 h-[600px] flex-col items-stretch`}
        >
          <div className="flex items-center py-3 w-full justify-between px-4 space-x-4 bg-green-900 ">
            <div className="flex items-center space-x-4">
              <img
                src="/images/bot/bot.png"
                className="w-16 rounded-full h-16"
              />
              <div className="flex flex-col space-y-1">
                <h1 className="text-lg font-semibold text-white">Chat Bot</h1>
                <small className="text-sm font-semibold text-white">
                  Online
                </small>
              </div>
            </div>
            <div
              title={muted ? 'Unmute' : 'Mute'}
              className="ml-auto pr-4 text-white text-2xl cursor-pointer"
              onClick={() => setMuted(!muted)}
            >
              {muted ? <GoMute /> : <GoUnmute />}
            </div>
          </div>
          {/* Here it is also UI logic, either show form or chat  */}
          <>
            <div
              ref={chatRef}
              className="flex-1 transition-all duration-500 h-[400px] flex flex-col space-y-3 p-4 w-full overflow-y-scroll"
            >
              {conversations?.map((conversation, i) => (
                <Message
                  sending={sending}
                  key={i}
                  conversation={conversation}
                />
              ))}
              {sending && (
                <div className="mr-auto flex space-x-1 p-3 rounded-full bg-green-200 border-green-400">
                  <div className="h-2.5 w-2.5 dots-1 rounded-full bg-gray-900"></div>
                  <div className="h-2.5 w-2.5 dots-2 rounded-full bg-gray-900"></div>
                  <div className="h-2.5 w-2.5 dots-3 rounded-full bg-gray-900"></div>
                </div>
              )}
              {conversations.length > 0 && (
                <NextMessageOptions
                  sending={sending}
                  setSending={setSending}
                  setConversations={setConversations}
                  replies={replies}
                  conversations={conversations}
                />
              )}
            </div>
            <div className="p-3 flex space-x-2 items-center border-t">
              <img
                src="/images/bot/whatsapp.webp"
                alt=""
                className="w-10 h-10"
              />
              <Link legacyBehavior
              
                href={`https://wa.me/9959194730?text=Hello,%20I%20reached%20you%20from%20your%20website%20and%20I%20would%20like%20to...`}
                >
                <a
                  target={'_blank'}
                  rel="noreferrer"
                  className="text-base font-semibold text-green-500 "
                >
                  Connect us on whatsapp!
                </a>
              </Link>
            </div>
          </>
        </div>
      </div>
    )
}

const Message = ({ conversation }) => {
    const { message } = conversation
    return (
        <>
            <div className={`px-4 py-3 font-semibold ${conversation?.who && conversation.who === 'user' ? 'rounded-tr-none bg-green-900 text-white ml-auto' : 'text-white rounded-tl-none mr-auto border'} shadow-sm rounded-xl max-w-[80%] bg-gray-900`}>
                {message}
            </div>

        </>

    )
}
const NextMessageOptions = ({ conversations, setSending, nextMessageOptions, setConversations }) => {
    const lastBotMessage = conversations[conversations.length - 1].message
    const options = replies?.find(conv => conv.message === lastBotMessage);
    const filteredConvo = conversations.filter(conv => conv.id === '04' || '05')
    return (
        <>
            {lastBotMessage && options &&
                options?.options?.map(opt => (
                    !filteredConvo?.find(conv => conv.message === opt?.option) &&
                    <div onClick={() => sendMessage(setConversations, conversations, setSending, { who: 'user', message: opt.option, id: opt.id })} key={opt.option} className='cursor-pointer bg-green-100 py-2 px-4 w-fit ml-auto rounded-full border-2 text-themeColor border-green-400'>
                        {opt.option}
                    </div>
                ))
            }
        </>

    )
}

export default Index