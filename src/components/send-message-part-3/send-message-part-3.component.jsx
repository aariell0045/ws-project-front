import "./send-message-part-3.styles.css";
import React from "react";
import PhoneSvg from "../../phone.svg";
import { Link } from "react-router-dom";
import GoBack from "../../icons/icons-components/go-back-icon/go-back-icon.component";

function SendMessagePart3() {
	return (
		<section id='send-message-part3'>
			<div className='send-message-part3-warpper last-warpper-1'>
			<header className='send-message-part3-main-header'>
				<Link to="/SendMessagePart2"><span><GoBack/></span></Link>
				<p>כל הפרטים לפני ששולחים:</p>
			</header>
				<img className='phoen-svg' src={PhoneSvg} alt='React Logo' />
				<div className='content-phone-box'>red</div>
			</div>
			<div className='send-message-part3-warpper'>
				<div className='send-message-part3-warpper-2' >
				<header className='send-message-part3-sub-header'>

					<p>ההודעה תשלח לקבוצות הבאות:</p>
				</header>

				<div className='send-message-part3-group-name-container'>שם הקבוצה</div>
				</div>

				<header className='send-message-part3-sub-header'>
					<p>תנאי שימוש:</p>
				</header>
				<div className='send-message-part3-conditions-container'>
					<article className='send-message-part3-conditions-container-content' >
						<p>

					כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימושכל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימושכל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש כל יהיו כתובים כל תנאי השימוש
					</p>
					</article>
					<div className='i-agree-line'>
						<input type="checkbox" />
						אני מאשר/ת שקראתי ואני מסכימ/ה לכל תנאי השימוש.
					</div>
				</div>

				
			</div>
			<div className='send-message-part3-warpper'>
			<div className="send-message-part-3-button-warpper">
              <div className="send-message-part-3-button">
                <div className="send-message-part-3-button-background"></div>
                  לשליחה דרך
              </div>
          </div>
			</div>
		</section>
	);
}

export default SendMessagePart3;
