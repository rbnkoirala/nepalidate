#### License

mit# Nepali Date

This Frappe application allows you to use Nepali Date on the Frappe Framework. 
[Detail Documentation on Wiki](https://github.com/rbnkoirala/nepalidate/wiki/)



## Installation

To install the Nepali Date application, follow these steps:

1. Navigate to the `frappe-bench` directory:

    ```shell
    cd frappe-bench
    ```
2. Clone the repository to your local machine:

    ```shell
    bench get-app https://github.com/rbnkoirala/nepalidate.git
    ```
    
3. Install the application dependencies:

    ```shell
    bench --site sitename install-app nepalidate
    ```

4. Run the Frappe development server:
    For Development Server
    ```shell
    bench start
    ```
    For Production Server
   ```shell
   sudo supervisorctl restart all
   ```

6. Open your web browser and visit `http://localhost:8000`.

7. Log in to the Frappe application using your credentials.

8. To Test the search "Nepali Date Demo" doctype and try.

## Usage

Check on Client Side Script [Latest Code](https://github.com/rbnkoirala/nepalidate/blob/main/nepalidate/nepali_date/doctype/nepali_date_demo/nepali_date_demo.js)
```shell
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
```

## Roadmap for Future

The following features are planned for future releases:

1. Calender POPUP on Child Table [#child table code](https://github.com/rbnkoirala/nepalidate/wiki/Convert-Nepali-Date-Inside-Table-(Child-Doctype))

## Screenshot
![image](https://github.com/rbnkoirala/nepalidate/assets/64308806/88dcc253-f445-4626-bdae-c233af68e481)


## License

This application is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
