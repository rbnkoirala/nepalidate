frappe.ui.form.on("Nepali Date Demo", {
    refresh(frm) {
        add_nepali_date_picker(frm, "nepali_date");   // if you dont want to add nepali date only
        add_nepali_date_picker(frm, "nepali_date_convert", "english_date_convert");   //  if you want to add nepali date and convert to english date      
        add_nepali_date_picker(frm, "nepali_date_time_convert", "english_datetime_convert");  // convert in time field

        add_nepali_date_picker(frm, "nepali_date_convert_one", "english_date_convert_one"); 
       
        
        
    },
    english_date_convert(frm) {
        convert_ADBS(frm, "english_date_convert", "nepali_date_convert");  
    },
    english_datetime_convert(frm) {
        convert_ADBS(frm, "english_datetime_convert", "nepali_date_time_convert");  
    },    
    english_date_convert_one(frm) {
        convert_ADBS(frm, "english_date_convert_one", "nepali_date_convert_one");  
    },
    english_datetime_convert_one(frm) {
        convert_ADBS(frm, "english_datetime_convert_one", "nepali_date_convert_one");  
    }
});

