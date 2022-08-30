# Install Node.js on Windows

To develop a Node.js application on Windows, the Node binaries must be installed. This guide walks through installing Node.js using the Windows installer tool.

## Install Node.js

### 1. Navigate to nodejs.org

<div style="text-align:center;padding: 20px 0;">
  <img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/posts/install-nodejs-windows/walkthrough_0.png?raw=true" style="width:66%;" />
</div>

Navigate to [nodejs.org](https://nodejs.org) and select the version of node you want to download. Even number versions have Long-Term Support (LTS).

Long-term support "typically guarantees that critical bugs will be fixed for a total of 30 months." Production applications should use LTS versions. Use a more recent odd number version to test out latest features.

### 2. Start the wizard

<div style="text-align:center;padding: 20px 0;">
  <img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/posts/install-nodejs-windows/walkthrough_1.png?raw=true" style="width:66%;" />
</div>

Once the installer finishes downloading, open the downloaded file to open the installation wizard.

### 3. Accept terms

<div style="text-align:center;padding: 20px 0;">
  <img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/posts/install-nodejs-windows/walkthrough_2.png?raw=true" style="width:66%;" />
</div>

Accept the terms of the License Agreement.

### 4. Select the installation directory

<div style="text-align:center;padding: 20px 0;">
  <img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/posts/install-nodejs-windows/walkthrough_3.png?raw=true" style="width:66%;" />
</div>

The default location, `C:\Program Files\nodejs\`, is fine. If you install in a non-default location, ensure the directory is located within your command-line's `$PATH` variable.

### 5. Customize features

<div style="text-align:center;padding: 20px 0;">
  <img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/posts/install-nodejs-windows/walkthrough_4.png?raw=true" style="width:66%;" />
</div>

Click 'Next' unless you are certain you require custom setup.

### 6. Install tools for native modules

You will need a few software tools to be installed in addition to Node.js to compile certain JavaScript/C++ packages. NPM packages are 3rd party libraries that can be used to extend the functionality of a Node.js application.

Check the box to install the tools. If you decide not to install the tools, they can be installed later.

<div style="text-align:center;padding: 20px 0;">
  <img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/posts/install-nodejs-windows/walkthrough_5.png?raw=true" style="width:66%;" />
</div>

### 7. Install

Click 'Install' and allow the installation to progress.

<div style="text-align:center;padding: 20px 0;">
  <img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/posts/install-nodejs-windows/walkthrough_6.png?raw=true" style="width:66%;" />
</div>

<div style="text-align:center;padding: 20px 0;">
  <img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/posts/install-nodejs-windows/walkthrough_7.png?raw=true" style="width:66%;" />
</div>

<div style="text-align:center;padding: 20px 0;">
  <img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/posts/install-nodejs-windows/installing_node_js.gif?raw=true" style="width:66%;" />
</div>

The installation took me \~3 minutes total.

### 8. Allow Node.js to make changes to the device

<div style="text-align:center;padding: 20px 0;">
  <img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/posts/install-nodejs-windows/walkthrough_8.png?raw=true" style="width:66%;" />
</div>

### 9. Check the installation

Node and NPM should now be installed. From Windows Terminal, issue the following commands to verify the `node` and `npm` installations. The `-v` flags indicate the process should print the **v**ersion of the library.

<div class="filename">command line</div>

```
> node -v
v16.14.2

> npm -v
v8.5.0
```

Your terminal may list different versions than what are listed here.

## Optional: Tools for Native Modules
If you decided to install Tools for Native Modules, there are additional steps to follow to complete installation.

### 1. Install tools for native modules

<div style="text-align:center;padding: 20px 0;">
  <img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/posts/install-nodejs-windows/walkthrough_9.png?raw=true" style="width:66%;" />
</div>

If you selected "Automatically install the necessary tools" in **Step 6**, a window will appear with some information about the libraries that are about to be installed. Continue through the prompts.

### 2. Finish the install in PowerShell 

<div style="text-align:center;padding: 20px 0;">
  <img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/posts/install-nodejs-windows/walkthrough_10.png?raw=true" style="width:66%;" />
</div>

The process will open a PowerShell window with Administrator rights. Continue the installation process in this PowerShell interface. Allow PowerShell to make changes to the device.

The installer recommends closing *all* programs other than the installer during the process. In my experience, closing other programs is not necessary. This installation process takes longer than the Node.js install.

### 3. Repair the install

It is common for the installation to "fail" the first time. It's common enough that the installation wizard comes with a 'Repair' button. If the tools for native modules installation fails the first time, reactivate the Node.js installer, and select the 'Repair' option.

Find the downloaded file from **Step 1**, and select it.

<div style="text-align:center;padding: 20px 0;">
  <img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/posts/install-nodejs-windows/walkthrough_11.png?raw=true" style="width:66%;" />
</div>

Select 'Next,' then select 'Repair.'

<div style="text-align:center;padding: 20px 0;">
  <img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/posts/install-nodejs-windows/walkthrough_12.png?raw=true" style="width:66%;" />
</div>

<div style="text-align:center;padding: 20px 0;">
  <img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/posts/install-nodejs-windows/walkthrough_13.png?raw=true" style="width:66%;" />
</div>

<div style="text-align:center;padding: 20px 0;">
  <img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/posts/install-nodejs-windows/walkthrough_14.png?raw=true" style="width:66%;" />
</div>

<div style="text-align:center;padding: 20px 0;">
  <img src="https://github.com/popdemtech/popdemtech.com/blob/master/assets/img/posts/install-nodejs-windows/walkthrough_15.png?raw=true" style="width:66%;" />
</div>

### 5. Verify the installation

Run the following commands to check the version of the installed libraries:

<div class="filename">command line</div>

```
> choco list -lo

Chocolatey v0.10.15
chocolatey 0.10.15
...long list...
visualstudio-installer 2.0.2
visualstudio2019-workload-vctools 1.0.1
visualstudio2019buildtools 16.11.9.0
21 packages installed.
```

In particular, check for the existance of `visualstudio-installer`, `visualstudio2019-workload-vctools`, and `visualstudio2019buildtools` libraries. The exact version and name of the Visual Studio tool may have progressed to higher versions than in the example output.

With Node.js installed, we can begin building the functional components of `smartsite`. While `smartsite` is going to contain a web server application for handling internet requests, it's worth noting that Node.js is useful for more than serving web requests. Node.js can be used to build desktop applications, command-line scripts, development libraries, and more. The Node.js ecosystem is ripe for software creation.

### Resources

Node.js Release Schedule and Information: [nodejs.org/en/about/releases](https://nodejs.org/en/about/releases/)

Manage PATH System Variable on Windows: [docs.oracle.com](https://docs.oracle.com/en/database/oracle/machine-learning/oml4r/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html#GUID-DD6F9982-60D5-48F6-8270-A27EC53807D0)

Install Tools for Native Modules: [github.com/nodejs/node-gyp#on-windows](https://github.com/nodejs/node-gyp#on-windows)

Repair Node Installation: [stackoverflow.com/a/68912225](https://stackoverflow.com/a/68912225)