import styled from "styled-components"

// const ChatNotification = styled.div(props => ({
//     className: "p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
// }))

const TestArray = ["a","b","c","d","e","f","g","h"]
const TestJson = TestArray.reduce((a,r) => [...a, {item:r}] ,[])
// console.log(TestJson[0])

const Tailwind = () => {
    return ( 
        <div className="space-y-4 m-auto py-2 flex">
            <div className="p-6 max-w-sm mx-auto my-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </div>
                <div>
                    <div className="text-xl font-medium text-black">ChitChat</div>
                    <p className="text-gray-500">You have a new message!</p>
                </div>
            </div>
            <div className="px-8 py-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">Hii</div>
        </div>
        
     );
}
 
export default Tailwind;