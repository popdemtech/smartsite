## Install Node.js on Windows

### 1. Navigate to nodejs.org

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_0.png" style="width:50%;min-width:320px;" />
</p>

Navigate to [nodejs.org](https://nodejs.org) and select the version of node you want to download. Even number versions have Long-Term Support (LTS).

Long-term support "typically guarantees that critical bugs will be fixed for a total of 30 months." Production applications should use LTS versions. Use a more recent odd number version to test out latest features.

Read more about node's release schedule in the Resources.

### 2. Setup Wizard

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_1.png" style="width:50%;min-width:320px;" />
</p>

Once the installer finishes downloading, open the downloaded file to open the installation wizard.

### 3. Accept Terms

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_2.png" style="width:50%;min-width:320px;" />
</p>

Accept the terms of the License Agreement if you agree.

### 4. Select the Installation Directory

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_3.png" style="width:50%;min-width:320px;" />
</p>

The default location, `C:\Program Files\nodejs\`, is fine. If you install in a non-default location, ensure the directory is located within your command-line's `$PATH` variable.

### 5. Customize Features

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_4.png" style="width:50%;min-width:320px;" />
</p>

Click next unless you are certain you want something different. I have never customized this step.

### 6. Install Tools for Native Modules

You will need a few software tools to be installed in addition to NodeJS in order to compile certain JavaScript/C++ npm modules. NPM modules are 3rd party libraries that can be used to extend the functionality of your application.

If you decide not to install the tools, they can be installed later.

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_5.png" style="width:50%;min-width:320px;" />
</p>

I checked the box because I know I want the tools.

### 7. Install

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_6.png" style="width:50%;min-width:320px;" />
</p>

Install.

### 8. Watch the Progress Bar

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_7.png" style="width:50%;min-width:320px;" />
</p>

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/installing_node_js.gif" style="width:50%;min-width:320px;" />
</p>

The installation took me \~3 minutes total.

### 9. Allow Node.js to make changes to the device

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_8.png" style="width:50%;min-width:320px;" />
</p>

### 10. After installation, Install Native Module Tools

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_9.png" style="width:50%;min-width:320px;" />
</p>

If you selected "Automatically install the necessary tools" in **Step 6**, a window will appear with some information about the libraries that are about to be installed. Continue through the prompts.

### 11. Finish Tools' Install in Powershell 

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_10.png" style="width:50%;min-width:320px;" />
</p>

The process will open a Powershell window with Administrator rights, and finish the installation in Powershell. Allow Powershell to make changes to the device.

### 12. Wait for and Debug Tools Install

This installation process takes longer than the Node.js install. The installer recommends closing *all* programs other than the installer during the install process.

I did not do that, and did not find the performance of my PC affected during install. However, I did experience an installation failure the first time...

### 12a. Repair Native Modules Install

It is common for the native modules installation to "fail" the first time. It's so common the installation wizard comes with a Repair button. If the native modules installation fails the first time, reactivate the Node.js installer download, and select the 'Repair' option. See "Repair Node Installation" in the Resources for details. See the Resourcse as well if you have an installation failure not fixed by this solution:

Find the downloaded file from **Step 1**, and select it.

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_11.png" style="width:50%;min-width:320px;" />
</p>

Select next, then select 'Repair.'

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_12.png" style="width:50%;min-width:320px;" />
</p>

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_13.png" style="width:50%;min-width:320px;" />
</p>

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_14.png" style="width:50%;min-width:320px;" />
</p>

<p style="text-align:center">
  <img src="/assets/img/posts/install-nodejs-windows/walkthrough_15.png" style="width:50%;min-width:320px;" />
</p>

### 13. Check Installation

Node and NPM should now be installed. If you installed the native modules, you will have those as well. From Windows Terminal (or similar), run the following commands and check the output:

<div class="filename">command line</div>

```
> node -v
v16.13.2

> npm -v
v8.2.1
```

`node -v` checks the version of node, and `npm -v` checks the version of npm, node package manager.

If native modules were installed, run the following to check the version of the installed libraries:

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

In particular, check for the existance of visualstudio-installer, visualstudio2019-workload-vctools, and visualstudio2019buildtools libraries. (Note: The exact version and name of the Visual Studio tool may have progressed to higher versions than in the example output.)

Now that Node is installed, we'll get to building out `smartsite`. Keep the following in mind: Node.js is useful for more than serving web requests. Node.js can be used to build desktop applications, command-line scripts, developer libraries (things that can be `npm install`ed), and more. The Node.js ecosystem is ripe for software creation.

### Resources

Node.js Release Schedule and Information: [nodejs.org/en/about/releases](https://nodejs.org/en/about/releases/)

Manage PATH System Variable on Windows: [docs.oracle.com](https://docs.oracle.com/en/database/oracle/machine-learning/oml4r/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html#GUID-DD6F9982-60D5-48F6-8270-A27EC53807D0)

Install Tools for Native Modules: [github.com/nodejs/node-gyp#on-windows](https://github.com/nodejs/node-gyp#on-windows)

Repair Node Installation: [stackoverflow.com/a/68912225](https://stackoverflow.com/a/68912225)