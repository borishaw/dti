<?php

// Form-related functionality

// Set up Special Instructions field based off selected trip
add_filter('frm_pro_available_fields', 'add_instructions_field');
function add_instructions_field($fields){
	$fields['instructions'] = __('Special Instructions'); // the key for the field and the label
	return $fields;
}

add_filter('frm_before_field_created', 'set_my_field_defaults');
function set_my_field_defaults($field_data){
    if ( $field_data['type'] == 'instructions' ) {
        $field_data['name'] = 'Special Instructions';

        $defaults = array(
            'size' => 400, 'max' => 150,
            'label1' => 'Draw It',
        );

        foreach ( $defaults as $k => $v ) {
            $field_data['field_options'][ $k ] = $v;
        }
    }

    return $field_data;
}

add_action('frm_display_added_fields', 'show_the_instructions_field');
function show_the_instructions_field($field){
    if ( $field['type'] != 'instructions' ) {
        return;
    }

    $field_name = 'item_meta['. $field['id'] .']';
    ?>
	
	<div class="frm_html_field_placeholder">
	<div class="howto button-secondary frm_html_field">This is a placeholder for your special instructions field. <br/>View your form to see it in action.</div>
	</div> <?php
}

add_action('frm_form_fields', 'show_my_front_field', 10, 2);
function show_my_front_field($field, $field_name){
  if ( $field['type'] != 'instructions' ) {
    return;
  }
  $field['value'] = stripslashes_deep($field['value']);
  
  // Get post ID
  if (isset($_GET['id'])) {
	$currentID = $_GET['id'];
	// Get special instructions field
	$specialInstructions = get_field('special_instructions', $currentID);
	if($specialInstructions):
		// If not blank, display
?>
	
	<h2><?php echo __('Special Instructions', 'dti'); ?></h2>
	<div>
		<?php the_field('special_instructions', $currentID); ?>
	</div>
	
	
<?php
		endif;
	}
}


// Set up Airport selection field

add_filter('frm_setup_new_fields_vars', 'frm_set_airport_values', 20, 2);
function frm_set_airport_values($values, $field){
	if($field->id == 457){//The ID of the field to be changed
	
		if (isset($_GET['id'])) {
			$currentID = $_GET['id'];
			// Get Aiport names and set in array
			
			$airportRepeater = get_field('airport_list', $currentID);
			if ($airportRepeater) {
				$airportArray = array(''); // empty array to add to
				foreach($airportRepeater as $airport) {
					$airportArray[] = $airport['airport_name']; // add each airport to array
				}
				$airportArray[] = 'Other'; // Add 'other' value to end of list
				// Pass array to values
				$values['options'] = $airportArray; //Replace options with airport values
			} else {
				$values['options'] = array('Not Applicable'); //Fallback in case no airports are listed
			}
		
			
		
		}
		
		
	}
	return $values;
}




// Getting form ID from Key
/**
 * Function to get ID of the Formidable form or field from form/field key
 * Source - https://formidablepro.com/help-desk/keys-vs-ids/ (note that there is a typo in the example code - last ")" was missed)
 *
 * @uses globals $frmdb, $wpdb
 * @param $form_or_field - string with two possible values: 'form' or 'field'
 * @param $key - string with key of the Formidable form or field
 * @return $id_from_key - numeric ID
 **/
function get_id_from_key_frm ( $form_or_field, $key ) { 
	global $frmdb, $wpdb;
	// Getting form ID using form_key
	if ( $form_or_field == 'form' && $key != '' ) {
		$id_from_key = $wpdb->get_var($wpdb->prepare("SELECT id from $frmdb->forms WHERE form_key = %s", $key));
	// Getting field ID using field_key
	} elseif ( $form_or_field == 'field' && $key != '' ) {
		$id_from_key = $wpdb->get_var($wpdb->prepare("SELECT id from $frmdb->fields WHERE field_key=%s", $key));
	}
	if (is_numeric($id_from_key)){
		return $id_from_key;
	}
}


