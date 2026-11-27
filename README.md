# FloatingChatIcon


### 2.1 Create the folder

Open PowerShell:

```powershell
mkdir FloatingChatPlatform
cd FloatingChatPlatform
```

### 2.2 Create the following folder structure

Create the following folder structure:

```text
FloatingChatPlatform/
│
├── chat-widget-sdk/
│
└── chat-api/
```

Run the following commands in PowerShell:

```powershell
mkdir chat-widget-sdk
mkdir chat-api
```

# **Step 3 – Create Angular Chat UI**

## **3.1 Install Angular CLI**

Install Angular CLI globally using PowerShell:

```powershell
npm install -g @angular/cli
```

Verify the Angular CLI installation:

```powershell
ng version
```




# **Step 5 – Create the JavaScript SDK**

This SDK will create the floating chat icon on every host website.

The host website will **not** need Angular or Node.js installed.

## **5.1 Create SDK folder structure**

Open a new PowerShell window at the root project directory:

```powershell
cd FloatingChatPlatform

cd chat-widget-sdk

npm init -y
```

Create folders:

```powershell
mkdir src
mkdir dist
```

Create the following file structure:

```text
chat-widget-sdk/
│
├── src/
│   └── chat-widget.js
│
├── dist/
│
└── package.json
```

## **5.2 Create the SDK file**

Create the following file:

`chat-widget-sdk/src/chat-widget.js`

Replace the file contents with the following code:
