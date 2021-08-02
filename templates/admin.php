

<?php
//After Submition

if(isset($_POST['submit'])){ //if submitted
    if(($_POST['oafcode'] != null) && (strlen($_POST['oafcode']) < 40)){ //preventing errors


   //querying the posts    
   $args = array(
       'post_type' => 'post'
   );

   $post_query = new WP_Query($args);
   $countt = 0;

   if($post_query->have_posts() )   //if posts are present
   {    
       while($post_query->have_posts() ) { 
           
           $post_query->the_post();
           $countt = $countt + substr_count( get_the_content(), $_POST['oafcode'] );  //incrementing the count of finds

           
           }
   }
   //echo($page->post_content);
  


   /*$content = str_replace('abffghi','abffghi',$content, $contrep
   );
   echo $contrep;
   
   return $content; */
       //$countt = substr_count( $content, $_POST['Choose'] );


       //displaying the count or an error
       ?>
       
       <div id="oaf-alert"><p><?php echo $countt . " times";?></p>
       <?php

   
   

}
else{

   ?><p>Invalid Input</p><?php
}
} 


?> 
</div>



<div id="oaf-wrapper">

    <h1 style="4rem;">Orange Affiliate Plugin</h1>

    <!-- Affiliate Company/Program Menu -->

    <ul class="oaf-menu">
    
        <li ><a onclick="openPage('oaf-amazontab', this)" id="defaultOpen">Amazon</a></li>
        <li><a onclick="openPage('oaf-ebaytab', this)">Ebay</a></li>
        <li><a onclick="openPage('oaf-clothestab', this)">Clothes</a></li>
    </ul>
    <!-- Amazon's Tab Contents -->

    <div class="oaf-tabcontent" id="oaf-amazontab">

        <h2>Amazon</h2>
    <!-- Database Form Submit -->
        <form onsubmit="return false;" id="oafform" method="post">

            <div class="buttongroupwrapper">  
                <div  class="buttongroup">

                    <input type="text" id="oaflink" value="">


                </div>
            </div> 

        </form> 

        <input onclick="oaflinksubmit();" class="hvr-grow" id="oaf-linksubmitbutton" form="oafform" type="submit"  value="Do it"> 
        <p id="status"></p>
       

    </div> 


    <!-- Ebay's Tab Contents -->

    <div class="oaf-tabcontent" id="oaf-ebaytab">
        <h2>Ebay</h2>
    </div>


    <!-- Clothes' Tab Contents -->

    <div class="oaf-tabcontent" id="oaf-clothestab">
        <h2>Clothes</h2>
    </div>

</div>


<script>

//Opens the default Tab set on Page

defaultopen();



//Database Submittion Javascript

function oaflinksubmit()
{
    jQuery(function($) {
        var oaflink = "";
        oaflink = document.getElementById("oaflink").value;
        alert(oaflink);
        if(oaflink){
            $.ajax
            ({
                type:'post',
                url:'<?php echo plugins_url( '../formprocess/dbsubmit.php', __FILE__)  ?>',
                data:
                {
                    user_oaflink:oaflink,
                },
                success: function (response)
                {
                    document.getElementById("status").innerHTML="Form Submitted Successsfully";
                }
            });
        }
  return false;
});

}



</script>

<?php






