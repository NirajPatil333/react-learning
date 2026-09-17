import React from 'react'

const SearchField = (props) => {
    return (
        <div className='flex-1'>
            <h3 className='font-medium'>{props.title}</h3>
            <div className='flex mt-2 items-center gap-2 text-gray-400'>
                <props.icon className='h-6 w-6 text-violet-600 shrink-0' />
                <span className='whitespace-nowrap '>{props.text}</span>
            </div>
        </div>
    )
}

export default SearchField