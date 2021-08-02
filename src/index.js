var pluginUrl = pluginsUrl.url;
const { registerBlockType } = window.wp.blocks;



const { InspectorControls } = wp.blockEditor;
const { PanelBody, Button, ResponsiveWrapper } = wp.components;
const { Fragment } = wp.element;
const { withSelect } = wp.data;
const { __ } = wp.i18n;
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { TextControl } = wp.components
const { TextareaControl } = wp.components


const BlockEdit = (props) => {
	const { attributes, setAttributes } = props;
 

    function updateUrl(event) {
        setAttributes( { oafurl:document.getElementById("inputfieldurl").value } );
        setAttributes( { oafname:document.getElementById("inputfieldname").value } );
        setAttributes( { oafdescription:document.getElementById("inputfielddescription").value } );

        updatedb(document.getElementById("inputfieldurl").value); 
    }
    function updatedb(oafurlajax){
        alert(pluginUrl + '/formprocess/dbsubmit.php');
        jQuery(function($) {
                $.ajax
                ({
                    type:'post',
                    url:pluginUrl + '/formprocess/dbsubmit.php',
                    datatype:"text",
                    data:
                    {
                        user_oaflink: oafurlajax,
                    },
                    success: function(){ alert("ajax complete")},
                    error:function(){ alert("ajax failed")},
                    
                    
                });
            
        });
    }

    const updateattributes= () => {
        props.setAttributes({
		
            oafurl:document.getElementById("inputfieldurl").value,
            oafname:document.getElementById("inputfieldname").value,
            oafdescription:document.getElementById("inputfielddescription").value,
            oafsubtext:document.getElementById("inputfieldsubtext").value,
            oafbuttontext:document.getElementById("inputfieldbuttontext").value,


        });
        //updatedb(document.getElementById("inputfieldurl").value); 
    }

    function onTodoChange(value){
        this.setState({
             name: value
        });
    }

	const removeMedia = () => {
		props.setAttributes({
			mediaId: 0,
            mediaUrl: '',
         
		});
	}
 
 	const onSelectMedia = (media) => {
		props.setAttributes({
			mediaId: media.id,
            mediaUrl: media.url,
 


        });
        //updatedb(document.getElementById("inputfieldurl").value); 

    }
    

 
	const blockStyle = {
		backgroundImage: attributes.mediaUrl != '' ? 'url("' + attributes.mediaUrl + '")' : 'none'
    };
    


	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Select Product Image', 'awp')}
					initialOpen={ true }
				>
					<div className="editor-post-featured-image">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectMedia}
								value={attributes.mediaId}
								allowedTypes={ ['image'] }
								render={({open}) => (
									<Button 
										className={attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
										onClick={open}
									>
										{attributes.mediaId == 0 && __('Choose an image', 'awp')}
										{props.media != undefined && 
						            			<ResponsiveWrapper
									    		naturalWidth={ props.media.media_details.width }
											naturalHeight={ props.media.media_details.height }
									    	>
									    		<img src={props.media.source_url} />
									    	</ResponsiveWrapper>
						            		}
									</Button>
								)}
							/>
						</MediaUploadCheck>
						{attributes.mediaId != 0 && 
							<MediaUploadCheck>
								<MediaUpload
									title={__('Replace image', 'awp')}
									value={attributes.mediaId}
									onSelect={onSelectMedia}
									allowedTypes={['image']}
									render={({open}) => (
										<Button onClick={open} isDefault isLarge>{__('Replace image', 'awp')}</Button>
									)}
								/>
							</MediaUploadCheck>
						}
						{attributes.mediaId != 0 && 
							<MediaUploadCheck>
								<Button onClick={removeMedia} isLink isDestructive>{__('Remove image', 'awp')}</Button>
							</MediaUploadCheck>
						}
					</div>

           
				</PanelBody>

                    <TextControl
                        label="Affiliate URL"
                        value={attributes.oafurl }
                        class="oafinputfield"
                        id="inputfieldurl"
                        onChange={updateattributes}            
                        type="text"
                    />

                    <TextControl
                        label="Product Name"
                        value={ attributes.oafname }
                        class="oafinputfield"
                        id="inputfieldname"
                        onChange={updateattributes}            
                        type="text"
                    />
                    <TextareaControl
                        label="Product Description"
                        value={ attributes.oafdescription }
                        class="oafinputfield"
                        id="inputfielddescription"
                        onChange={updateattributes}            
                        type="text"
                    />
                         <TextareaControl
                        label="Subtext"
                        value={ attributes.oafsubtext }
                        class="oafinputfield"
                        id="inputfieldsubtext"
                        onChange={updateattributes}            
                        type="text"
                    />
                               <TextareaControl
                        label="Button Text"
                        value={ attributes.oafbuttontext }
                        class="oafinputfield"
                        id="inputfieldbuttontext"
                        onChange={updateattributes}            
                        type="text"
                    />

			</InspectorControls>

  

            <p><b>URL: </b>{attributes.oafurl}</p>

            <div class="oafcontainer">

                <div class="oafleft">
                        
                        <img src={attributes.mediaUrl}></img>

                </div>
                <div class="oafright"/*style={blockStyle}*/>
                  
                <h2>{attributes.oafname}</h2>
                <p>{attributes.oafdescription}</p>
                <button>{attributes.oafbuttontext}</button>
                <div class="oafnot">
                    <p>{attributes.oafsubtext}</p>
                </div>


                    


                </div>
            </div>
		</Fragment>

       


	);
};

registerBlockType('orangeaffiliate/o-affiliateblock', {
    // built in attributes
    title: 'Orange Affiliate 1',
    description: 'Affiliate Block to Display affiliate Products.',
    icon: 'cart',
    category: 'common',
    

  

    // custom attributes
    attributes: {
        oafurl:{
            type:'string',
       
        },
        oafname:{
            type:'string',
       
        },

        oafdescription:{
            type:'string',

        },

        mediaId: {
            type: 'number',
            default: 0
        },
        mediaUrl: {
            type: 'string',
            default: ''
        },
        oafsubtext: {
            type: 'string',
            default: 'This is an affiliate Link'
        },
        oafbuttontext: {
            type: 'string',
            default: 'See the Product'
        },
        oafbuttontext: {
            type: 'boolean',
            default: 'See the Product'

        
        },
       
    },

    // built in functions
    /*edit({ setAttributes, attributes}){

        //custom functions

        function updateUrl(event) {
            setAttributes( { oafurl:document.getElementById("inputfield").value } );
            updatedb(document.getElementById("inputfield").value); 
        }
        function updatedb(oafurlajax){
            alert(pluginUrl + '/formprocess/dbsubmit.php');
            jQuery(function($) {
                    $.ajax
                    ({
                        type:'post',
                        url:pluginUrl + '/formprocess/dbsubmit.php',
                        datatype:"text",
                        data:
                        {
                            user_oaflink: oafurlajax,
                        },
                        success: function(){ alert("ajax complete")},
                        error:function(){ alert("ajax failed")},
                        
                        
                    });
                
        });

        
         

        }



        
    
        return([
            <input id="inputfield" value={ attributes.oafurl } type="text" />,
            <input onClick={ updateUrl } type="button"  value="Submiting"/>,


         
        ]); 
          
 
         
        
         
   
            
    
        

    },*/
    

    edit: withSelect((select, props) => {

        

        return { 

            media: props.attributes.mediaId ? select('core').getMedia(props.attributes.mediaId) : undefined 
        };

           

        

    })(BlockEdit),

    /*save({ attributes }){

       
            
        
        return <p>Author Name: { attributes.oafurl }</p>;

    }*/

    save: (props) => {
		const { attributes } = props;
		const blockStyle = {
			backgroundImage: attributes.mediaUrl != '' ? 'url("' + attributes.mediaUrl + '")' : 'none'
        };
        
		return (
			<div class="oafwrapper" /*style={blockStyle}*/>
               
                <a class="oafcontainer" href={ attributes.oafurl }>

                    <div class="oafleft">
                        <img src={attributes.mediaUrl}></img>
                    </div>

                    <div class="oafright">
                        <h3>{ attributes.oafname }</h3>
                        <p>{ attributes.oafdescription}</p>
                        <button>{ attributes.oafbuttontext }</button>
                        <div class="oafnot">
                            <p>{attributes.oafsubtext}</p>

                        </div>
                    </div>

                </a>
             
			</div>
		);
	}




})


