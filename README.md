# Task APP
## Steps:
git clone [Repo](https://github.com/rayasrahiman/TaskApp.git)
git pull origin master


# NOTE:

"Please run on Android Emulator as some packages (Dependencies for IOS not installed) wouldn't work IOS Emulator."

## Installation

```bash
npm i --save
```
```bash
After Package installation please go to "TaskApp\node_modules\react-native-i18n\android\build.gradle"
change the following line
"dependencies {
  compile "com.facebook.react:react-native:+" // From node_modules
}"
to
"dependencies {
  implementation "com.facebook.react:react-native:+" // From node_modules
}"
```

## Run


```bash
npm run android
```

#

Happy coding.
