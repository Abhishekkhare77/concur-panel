import { ClickableTile, ContainedList, ContainedListItem } from '@carbon/react'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BuilderTab = (props) => {

    const [editorHtml, setEditorHtml] = useState('This is the welcome section text');
    const [editorHtml1, setEditorHtml1] = useState('This is other section ');

    const handleChangeSection1 = (html) => {
        setEditorHtml(html);
    };
    const handleChangeSection2 = (html) => {
        setEditorHtml1(html);
    };

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '20%', border: '1px solid gray', padding: '1rem' }}>
                <ClickableTile>
                    Welcome section
                </ClickableTile>
                <ClickableTile>
                    Information section
                </ClickableTile>
                <ClickableTile light>
                    + Add More Section 
                </ClickableTile>
            </div>
            <div style={{ width: '80%', border: '1px solid gray', padding: '1rem' }}>
                <>
                    <ContainedList label="Welcome Section" kind="on-page">
                        <ContainedListItem>
                            <ReactQuill
                                onChange={handleChangeSection1}
                                value={editorHtml}
                                modules={BuilderTab.modules}
                                formats={BuilderTab.formats}
                                bounds={'.app'}
                                placeholder={props.placeholder}
                                style={{ height: '10vh',marginBottom:'2rem' }}
                            />
                        </ContainedListItem>
                    </ContainedList>
                    <ContainedList label="Information section" kind="on-page">
                        <ContainedListItem>
                        <ReactQuill
                                onChange={handleChangeSection2}
                                value={editorHtml1}
                                modules={BuilderTab.modules}
                                formats={BuilderTab.formats}
                                bounds={'.app'}
                                placeholder={props.placeholder}
                                style={{ height: '20vh',marginBottom:'2rem' }}
                            />
                        </ContainedListItem>
                    </ContainedList>
                </>
            </div>
        </div>
    )
}

export default BuilderTab

BuilderTab.modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }],
        ['bold', 'italic', 'underline', 'strike'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link'],
    ],
    clipboard: {
        matchVisual: false,
    },
};

BuilderTab.formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'indent',
    'link',
];

BuilderTab.propTypes = {
    placeholder: PropTypes.string,
};