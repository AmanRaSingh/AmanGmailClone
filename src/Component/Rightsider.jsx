import calender from './icons/calendar_2020q4_2x.png'
import keep from './icons/keep_2020q4v3_2x.png'
import tasks2 from './icons/tasks2_2x.png'
import contact from './icons/contacts_2x.png'
import add from './icons/contacts_2x.png'
import chau from './icons/chevron_right_black_24dp.svg'
const Rightside = () => {
    return (
        <>
        <section class="app-container" >

        <div class="app-group">
  
          <div class="app-item">
            <button class="btn">
              <img src={calender} alt="Calendar" class="btn-icon btn-icon-sm"/>
            </button>
          </div>
    
          <div class="app-item">
            <button class="btn">
              <img src={keep} alt="Keep" class="btn-icon btn-icon-sm"/>
            </button>
          </div>
    
          <div class="app-item">
            <button class="btn">
              <img src={tasks2} alt="Tasks" class="btn-icon btn-icon-sm"/>
            </button>
          </div>
    
          <div class="app-item">
            <button class="btn">
              <img src={contact} alt="Contacts" class="btn-icon btn-icon-sm"/>
            </button>
          </div>
    
          <div class="btn btn-nofill" >
            <div class="hrt-rule btn-icon-sm"></div>
          </div>
    
          <div class="app-item">
            <button class="btn">
              <img src={add} alt="" class="btn-icon btn-icon-sm btn-icon-disabled"/>
            </button>
          </div>
  
        </div>
        <button class="btn">
          <img src={chau} alt="" class="btn-icon btn-icon-sm btn-icon-alt"/>
        </button>
  
      </section>
      </>
    );
}
export default Rightside