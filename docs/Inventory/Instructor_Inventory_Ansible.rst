Accessing Inventory file on Ansible Node within UDF
===================================================

OVERVIEW
--------
UDF is a F5 Lab resource for teaching and enabling F5 and external users for our classes.  

Finding the Inventory within the Ansible Node can be utilized to connect to things like 
the F5 BIG-IP IP address, or the Web Nodes via Ansible or SSH.  This section covers how to access
the instructor inventory within the Ansible Node in the prebuilt (Provisioned Environment)


HOW TO ACCESS
-------------

1. Using Web Shell link from the Ansible-Node you can *change into the rhel-user* `su rhel-user` or the recommended way is to
utilize a terminal from within the VSCode Server link (Password is Ansible123!).
 
   The Workbench information is stored in a local directory/file lab_inventory/hosts

   From the command line run 

   .. code:: bash
   
      cat ~/lab_inventory/hosts

   Sample hosts file:

   .. code:: bash

      [all:vars]
      ansible_user=rhel-user
      ansible_password=Ansible123!
      ansible_port=22
      ansible_become_pass="{{ ansible_password }}"

      [lb]
      f5 ansible_host=10.1.1.7 ansible_user=admin private_ip=10.1.20.30 ansible_password=Ansible123! server_port=443

      [control]
      ansible ansible_host=10.1.1.4 ansible_user=rhel-user private_ip=10.1.1.4 


      [web]
      node1 ansible_host=10.1.1.5 ansible_user=rhel-user private_ip=10.1.10.5
      node2 ansible_host=10.1.1.6 ansible_user=rhel-user private_ip=10.1.10.6
