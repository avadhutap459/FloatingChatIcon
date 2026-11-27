# FloatingChatIcon


### 1 Create the folder

Open PowerShell:

```powershell
mkdir FloatingChatPlatform
cd FloatingChatPlatform
```

### 1.2 Create the following folder structure

Create the following folder structure:

```text
FloatingChatPlatform/
│
├── chat-widget-sdk/
│   ├── src/
│   └── dist/
│       └── chat-widget.min.js
│
└── test-website/
    └── index.html
```

Run the following commands in PowerShell:

```powershell
mkdir chat-widget-sdk
mkdir test-website
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



# **Step 6 – Build the JavaScript SDK**

The JavaScript SDK must be compiled into a distributable file that can be embedded into any host website.

## **6.1 Install esbuild**

Open PowerShell:

```powershell
cd FloatingChatPlatform\chat-widget-sdk

npm install --save-dev esbuild
```

## **6.2 Update package.json**

Open the following file:

`chat-widget-sdk/package.json`

Add the following build script inside the existing `scripts` section:

```json
{
  "scripts": {
    "build": "esbuild src/chat-widget.js --bundle --minify --outfile=dist/chat-widget.min.js"
  }
}
```

<text color="secondary">Keep the existing dependencies, package name, and other package properties. If a `scripts` section already exists, add or update only the `build` entry.</text>

## **6.3 Build the SDK**

Run the following command in PowerShell:

```powershell
npm run build
```

Expected output folder structure:

```text
dist/
└── chat-widget.min.js
```


# **Step 7 – Create a Test Website**

Before deploying the SDK, we need to test it on a website that is not built using Angular.

We will use plain HTML to simulate an external customer website.

## **7.1 Create test website folder**

From the root project directory, open PowerShell:

```powershell
cd FloatingChatPlatform

mkdir test-website
```

Create the following file structure:

```text
test-website/
└── index.html
```

## **7.2 Create index.html**

Create the following file:

`FloatingChatPlatform/test-website/index.html`



# **Step 9 – Run the Test Website**

Open **PowerShell Terminal 2**.

Navigate to the test website folder:

```powershell
cd FloatingChatPlatform\test-website
```

Start a temporary HTTP server using Python:

```powershell
python -m http.server 8000
```

If the `python` command isn't recognized, try:

```powershell
py -m http.server 8000
```

Open the following URL in your browser:

[http://localhost:8000/](http://localhost:8000/)
