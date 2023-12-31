import React, {useState} from 'react'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import css from './AddCardModal.module.css'

export const AddCardModal = ({visible, onClose, handleCardAdd}) => {
    const customStyle = {
        background: 'rgb(58,58,58)',
        padding: '20px',
        width: '50%',
        top: '-3rem',
        height: 'fit-content',
        maxWidth: '40rem',
    }

    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')

    return (
        <Rodal
            customStyles={customStyle}
            visible={visible}
            onClose={onClose}>
            <div className={css.container}>
                <div>
                    <span className={css.label}>Card Title</span>
                    <input type='text' className={css.input} value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div>
                    <span className={css.label}>Detail</span>
                    <textarea
                        rows={10}
                        className={css.input}
                        value={detail}
                        type='text'
                        onChange={(e) => setDetail(e.target.value)}
                    />
                </div>

                <button
                    disabled={title === ''}
                    className={css.saveButton}
                    onClick={() => {
                        handleCardAdd(title, detail)
                        setTitle('')
                        setDetail('')
                    }}
                >Add
                </button>
            </div>
        </Rodal>
    )
}
