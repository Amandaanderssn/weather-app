import React from "react"
import SearchBtn from "../Common/Components/Search Button"
import "./index.css"

import SplitText from "../Common/Components/AnimatedWelcomeText/index";

const MainPage = () => {

    const [hasSearched, sethasSearched] = React.useState(false)


    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <div style={{ margin: 'auto' }} className="mainDiv">
            {!hasSearched &&
                // <h1>Check today’s weather and plan your day with a smile!!</h1>
                <SplitText
                    text="Check today’s weather and plan your day with a smile!!"
                    className="text-2xl font-semibold text-center"
                    delay={20}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
            }
            <SearchBtn setHasSearched={sethasSearched} />
        </div>
    )
}

export default MainPage