import React from 'react'
import check from '../icons/check_box_outline_blank_black_24dp.svg'
import drag from '../icons/drag_indicator_black_24dp.svg'
import star from '../icons/star_border_black_24dp.svg'
import archive from '../icons/archive_black_24dp.svg'
import deleteblack from '../icons/delete_black_24dp.svg'
import mark from '../icons/mark_as_unread_black_24dp.svg'
import access from '../icons/access_time_filled_black_24dp.svg'
import outline from '../icons/check_box_outline_blank_black_24dp.svg'
import drag1 from '../icons/drag_indicator_black_24dp.svg'
import starborder from '../icons/star_border_black_24dp.svg'
import archiveblack from '../icons/archive_black_24dp.svg'
import deleteblack1 from '../icons/delete_black_24dp.svg'
import markas from '../icons/mark_as_unread_black_24dp.svg'
import access1 from '../icons/access_time_filled_black_24dp.svg'
import checkbox2 from '../icons/check_box_outline_blank_black_24dp.svg'
import dragindicator from '../icons/drag_indicator_black_24dp.svg'
import star1 from '../icons/star_border_black_24dp.svg'
import archive2 from '../icons/archive_black_24dp.svg'
import delete3 from '../icons/delete_black_24dp.svg'
import markas1 from '../icons/mark_as_unread_black_24dp.svg'
import accesstime3 from '../icons/access_time_filled_black_24dp.svg'

function Inbox() {
    return (
        <>
            <div class="mail">

                <div class="inbox-message-item">

                    <div class="checkbox"  >
                        <button class="btn">
                            <img src={check} alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
                        </button>
                    </div>

                    <div class="message-group-hidden">
                        <button class="btn-alt btn-nofill drag-indicator" >
                            <img src={drag} alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled" />
                        </button>
                    </div>

                    <button class="btn star" >
                        <img src={star} alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
                    </button>

                    <div class="message-default" >

                        <div class="message-sender message-content unread" >
                            <span >Cascadom</span>
                        </div>

                        <div class="message-subject message-content unread">
                            <span>Dev Horror Stories: 👻 2000 lines of inline styles</span>
                        </div>

                        <div class="message-seperator message-content"> - </div>

                        <div class="message-body message-content">
                            <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta error beatae optio ea, quod harum. Iure ab sed, dolores eos repudiandae inventore magnam id modi blanditiis harum at. Facere, exercitationem.</span>
                        </div>

                        <div class="gap message-content" > &nbsp; </div>

                        <div class="message-date center-text unread" >
                            <span>12:09 AM</span>
                        </div>

                    </div>

                    <div class="message-group-hidden" >
                        <div class="inbox-message-item-options">
                            <button class="btn">
                                <img src={archive} alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                            </button>

                            <button class="btn">
                                <img src={deleteblack} alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                            </button>

                            <button class="btn">
                                <img src={mark} alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                            </button>

                            <button class="btn">
                                <img src={access} alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                            </button>
                        </div>
                    </div>

                </div>

                <div class="inbox-message-item  message-default-unread">

                    <div class="checkbox"  >
                        <button class="btn">
                            <img src={outline} alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
                        </button>
                    </div>

                    <div class="message-group-hidden">
                        <button class="btn-alt btn-nofill drag-indicator" >
                            <img src={drag1} alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled" />
                        </button>
                    </div>

                    <div >
                        <button class="btn star" >
                            <img src={starborder} alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
                        </button>
                    </div>

                    <div class="message-default" >

                        <div class="message-sender message-content" >
                            <span >Mr. President</span>
                        </div>

                        <div class="message-subject message-content">
                            <span>Thanks for Saving the World</span>
                        </div>

                        <div class="message-seperator message-content"> - </div>

                        <div class="message-body message-content">
                            <span> Party at my crib next weekend, amet consectetur adipisicing elit. Soluta error beatae optio ea, quod harum. Iure ab sed, dolores eos repudiandae inventore magnam id modi blanditiis harum at. Facere, exercitationem.</span>
                        </div>

                        <div class="gap message-content" > &nbsp; </div>

                        <div class="message-date center-text" >
                            <span>4:23 PM</span>
                        </div>

                    </div>

                    <div class="message-group-hidden" >
                        <div class="inbox-message-item-options">
                            <button class="btn">
                                <img src={archiveblack} alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                            </button>

                            <button class="btn">
                                <img src={deleteblack1} alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                            </button>

                            <button class="btn">
                                <img src={markas} alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                            </button>

                            <button class="btn">
                                <img src={access1} alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                            </button>
                        </div>
                    </div>

                </div>

                <div class="inbox-message-item  message-default-unread">

                    <div class="checkbox"  >
                        <button class="btn">
                            <img src={checkbox2} alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
                        </button>
                    </div>

                    <div class="message-group-hidden">
                        <button class="btn-alt btn-nofill drag-indicator" >
                            <img src={dragindicator} alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled" />
                        </button>
                    </div>

                    <div >
                        <button class="btn star" >
                            <img src={star1} alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
                        </button>
                    </div>

                    <div class="message-default" >

                        <div class="message-sender message-content" >
                            <span >Spotify</span>
                        </div>

                        <div class="message-subject message-content">
                            <span>🎉 💰 New Job who this? </span>
                        </div>

                        <div class="message-seperator message-content"> - </div>

                        <div class="message-body message-content">
                            <span> Hello, Habib! We are glad to break the news to you, amet consectetur adipisicing elit. Soluta error beatae optio ea, quod harum. Iure ab sed, dolores eos repudiandae inventore magnam id modi blanditiis harum at. Facere, exercitationem.</span>
                        </div>

                        <div class="gap message-content" > &nbsp; </div>

                        <div class="message-date center-text" >
                            <span>2:01 PM</span>
                        </div>

                    </div>

                    <div class="message-group-hidden" >
                        <div class="inbox-message-item-options">
                            <button class="btn">
                                <img src={archive2} alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                            </button>

                            <button class="btn">
                                <img src={delete3} alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                            </button>

                            <button class="btn">
                                <img src={markas1} alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                            </button>

                            <button class="btn">
                                <img src={accesstime3} alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Inbox