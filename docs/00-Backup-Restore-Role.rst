Use-case 00: Backup And Restore Role
=================================================

OVERVIEW
--------
This is a great example of best practices when doing major configurations with a BIG-IP having a backup of your previous configuration ensures that you can return to a point in time that was a known working configuration if something were to break.

Backup-Role.yaml is a templated Ansible play that utilizes an underlying Role that demonstrates the ability to backup a BIG-IP Configuration to a UCS File then download that UCS file to /tmp/Use-Case-00-backup.ucs on the local ansible box.  This is to ensure a backup within the BIG-IP and a backup local to your machine.

Restore-Role.yaml is a templated Ansible play that utilizes an underlying Role that demonstrates the ability to restore a BIG-IP Configuration with the locally stored UCS File in "/tmp/Use-Case-00-backup.ucs".  This play has a check to ensure that the UCS file exists before it can run a restore.

Note: the restore command will produce an error in some builds of Ansible even though the restoration does complete it is a known bug.

RUN THE TEMPLATE
----------------
Running this template assumes that a F5 BIG-IP instance, necessary webservers and Ansible node are available.  
To deploy a sandbox infrastructure in AWS users can use the `Ansible Workshops <https://github.com/ansible/workshops>`__

1. Login to the Ansible Host

2. Change Directory in the Ansible Host to the use-cases repo previously downloaded

   .. code::
   
      cd ~/ansible-provisioner-usecases/00-Backup-Restore-Role/


3. (Optional) Edit 'f5_vars.yml' file in the vars folder to customize the existing variables. For example: File-Name: ‘mybackup.ucs'

4. Run the Ansible Playbook ‘Backup-Role.yaml’:

   .. code::
   
      ansible-playbook Backup-Role.yaml


In this example, the playbook looks for the Folder-Location and File-Name variables as specified in the vars/f5_vars.yaml file and uses that information to tell the BIG-IP to run a backup and then export that file to where the Folder-Location and File-Name variables points to.

5. Run the Ansible Playbook ‘Restore-Role.yaml’:

   .. code::
   
      ansible-playbook Restore-Role.yaml

In this example, the playbook looks for the Folder-Location and File-Name variables as specified in the vars/f5_vars.yaml file and uses that information to upload the configuration (if exists) to the BIG-IP to run a restore.



TESTING AND VALIDATION
-----------------------
**BIG-IP CONFIGURATION VERIFICATION:**

This section is optional and for testing and verification purposes only. It assumes knowledge of how to operate BIG-IP commands and networking.

Ansible machine
- run a ‘ls /tmp/Use-Case-00-backup.ucs’ (without single quotes) to verify the backup file exists, this is also assuming that the variables file was not changed.

BIG-IP - (https://F5-BIG-IP-Public-IP:8443) - get the F5-BIG-IP-Public-IP from instructor_inventory file in provisioning host.  
- Login to the BIG-IP instance  
- Navigate to System->Archives  
  - there should be an archive file called "Use-Case-00-backup.ucs"  
  
NOTE: Username is Admin and the Password would be part of the Linklight Lab password or in the f5_vars.yml file used to provision the lab.
