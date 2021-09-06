import "./send-message-part-2.styls.css";
import React from "react";


function SendMessagePart2() {
    return (
        <section id='send-message-part-2'>
            <div className='send-message-part-2-warpper'>
                <div className='send-message-part-2-right-side'>
                    <header className='send-message-part-2-main-header'>
                        <h2>יש לבחור את הקבוצה הרלוונטית:</h2>
                    </header>
                    <input className='send-message-part-2-right-side-search-input' type="text" placeholder="חיפוש בקבוצות שלי" />
                    <div className='send-message-part-2-right-side-groupsList'>
                        <div className='group-box'>
                            <p>
                                <strong>שם הקבוצה</strong>-100 משתתפים
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className='send-message-part-2-left-side'>
                    <div className='send-message-part-2-left-side-background'>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SendMessagePart2