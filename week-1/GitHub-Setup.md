#GitHub Setup
---

### Downloading Git

#####Step 1: [Download Git](https://git-scm.com/download/mac)

#####Step 2: Open the DMG and run the package installer

#####Step 3: Once the installer has finished, open the Terminal app and type git --version followed by the return key. Note that there are two dashes, not one.

#####Step 4: The terminal should report back with your currently installed Git version

#####Step 5: 

```
# We need to make sure the Terminal goes through the correct order of folders to discover your newer version of Git.
$ echo "export PATH=/usr/local/git/bin:/usr/local/bin:/usr/local/sbin:$PATH" >> ~/.bash_profile

# Tell the Terminal to look at your bash_profile to get the updated order of folders (your "$PATH")
$ source ~/.bash_profile

# Now let's check your Git version again
$ git --version

# You should now see the version number corresponding to the DMG you downloaded (e.g. 1.8.1.3)
```

#####Step 6: 
```
# Set your username
$ git config --global user.name "Your Name Here"

# Set your email address
$ git config --global user.email "your_name@domain.com"
```

#####Step 7: Setup Github

Download the git helper

```
# Download the keychain helper
$ curl -s -O http://github-media-downloads.s3.amazonaws.com/osx/git-credential-osxkeychain

# Modify permissions on the helper so it can operate
$ chmod u+x git-credential-osxkeychain

# Move the helper so Git can access it. This command will ask you for your (computer user) password. As you're typing your password, it won't show the characters, press return when done typing it.
$ sudo mv git-credential-osxkeychain /usr/local/git/bin

# Tells Git to use the helper
$ git config --global credential.helper osxkeychain

# Check again to see if the helper is successfully installed
$ git credential-osxkeychain
```

#####Step 8: Setting up SSH
```
# Point the terminal to the directory that would contain SSH keys for your user account.
$ cd ~/.ssh
```

#####Step 9: Backup SSH

```
# Ensure that you are in your ~/.ssh folder
$ cd ~/.ssh

# Make a subdirectory called "key_backup" in the current directory
$ mkdir key_backup

# Copies the id_rsa keypair into key_backup
$ cp id_rsa* key_backup

# Deletes the id_rsa keypair in your ~/.ssh directory
$ rm id_rsa*
```
##### Generate New SSH
```
# Ensure that you are in your ~/.ssh folder
$ cd ~/.ssh

# Create a new ssh key using the provided email. The email you use in this step should match the one you entered when you created your Github account
$ ssh-keygen -t rsa -C "your_email@domain.com"
```

##### Step 10: Copy your SSH Key and put it in GitHub

```
# The below command will copy your newly generated key to your computer's clipboard.
$ pbcopy < ~/.ssh/id_rsa.pub
```

Now we’ll add your key to Github:

Visit your account settings.

Click Add SSH key.

Enter a descriptive title for the computer you’re currently on, e.g. “Work iMac” into the Title field.

Paste your key into the Key field (it has already been copied to your clipboard).

Click Add Key.

Enter your Github password.

```
# Attempts to connect to Github using your SSH key.
 # Don't change the address shown below
 $ ssh -T git@github.com

 # You may see the following warning:
 The authenticity of host 'github.com (207.97.227.239)'
 cant be established.
 RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
 Are you sure you want to continue connecting (yes/no)?

 # Type yes and press return
 # You may have to enter your recently selected passphrase.

 # You should then see:
 Hi username! You've successfully authenticated,
 but GitHub does not provide shell access.
 ```
