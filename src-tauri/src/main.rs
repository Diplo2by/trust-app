#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[tauri::command]
fn hello_fn(name:String)->String{
    format!("Console Log")
}

#[tauri::command]
fn call_rust() {
  println!("Hey JS"); 
}



fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![hello_fn,call_rust])
        .run(tauri::generate_context!())
        .expect("Couldn't run :/")
}
