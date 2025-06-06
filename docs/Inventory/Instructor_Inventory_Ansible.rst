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


OVERVIEW
--------

The use cases templates are built for the F5 Automation Sandbox ennvironment. To run the use-cases, users must use either the Ansible AWS Provisioner or access to the F5 UDF Environment to stand-up the F5 automation sandbox environment. 

With a F5 Automation Sandbox environment and these scenario use cases, users can/will be able to

- Test common deployment scenarios through Automation with Ansible
- Fork instances of code to develop their own plugins and automation playbooks 
- Provide feedback on existing and new use cases that are relevant to everyday work

.. attention:: 

   This content is built by F5 Business Development organization. New content will be added periodically to provide additional automation senarios. Please open a github issue for any new feature request.

HOW TO USE
----------

.. image:: images/executing-templates.png
   :width: 800

**1. PROVISION INFRASTRUCTURE**

   There are two options to creating a F5 Automation Sandbox environment, you only need to do one of these (not both) to access the lab.

      - The following link will help to create the `Ansible Provisioner <https://clouddocs.f5.com/training/automation-sandbox/build_environment.html>`_ to build your environment in AWS. 

      - Contact your F5 Account Manager or Sales Engineer to help setup a F5 UDF Environment for testing.



**2. Examine the Ansible-Use-Case Code via Github**

   - Examine the use case code via Github - ` <https://github.com/f5devcentral/f5-bd-ansible-labs>`_

|

**3. When Using AWS Provisioner Setup Environment & Ansible Inventory File**

   1. Login to the Ansible Host (**studentX-ansible**) provided by the F5 Ansible
      AWS Provisioner
   
      The Workbench information is stored in a local directory, named after the
      workshop, after the provisioner is run.

      - Example: <<workshop_name>>/instructor_inventory.txt

      Sample inventory.txt file:

      .. code:: bash

         [all:vars]
         ansible_port=22

         [student1]
         student1-ansible ansible_host=34.219.251.xxx ansible_user=centos #Ansible host/control node
         student1-f5 ansible_host=52.39.228.xxx ansible_user=admin        #BIG-IP
         student1-host1 ansible_host=52.43.153.xxx ansible_user=centos    #Backend application server1
         student1-host2 ansible_host=34.215.176.xxx ansible_user=centos   #Backend application server2

   2. Clone the "f5-bd-ansible-labs" Repo on the Ansible host
      
      - IP: Ansible control node IP from the inventory.txt file
      - username: studentx
      - password: provided while running the provisioner in f5_vars.yml

      .. code:: bash

         ssh studentx@34.219.251.xxx
         
         cd ~/
         
         git clone https://github.com/f5devcentral/f5-bd-ansible-labs

   3. Login to the BIG-IP (**studentX-f5**) provided by the F5 Ansible AWS
      Provisioner
      
      Sample entry in inventory file: **student1-f5 ansible_host=52.39.228.xxx**
      
      - IP: BIG-IP from the inventory.txt file
      - Port: 8443
      - username: admin
      - password: provided while running the provisioner in f5_vars.yml
      
      .. code:: bash
      
         https://52.39.228.xxx:8443

|   
   
**4. When Using F5 UDF Environment & Ansible Inventory File**

   When using the F5 UDF environment, everything is configured and setup correctly, use the instructions on how to access your lab given to you by either your F5 instructor or by the UDF Instructions Email.   
   

**5. RUN USE CASE TEMPLATES**

   Start with Use-Cases (Click the following link) to begin - `Use-Case 00 <https://clouddocs.f5.com/training/fas-ansible-use-cases/00-Backup-Restore-Role.html>`_ 

   .. note::

      Keep the BIG-IP login handy to login and validate configuration when use cases are executed
   
Support
-------

   This project is a community effort to promote Network and Security automation and is maintained by F5 Business Development (BD). For anyfeature requests or issues, feel free to open an `issue <https://github.com/f5devcentral/f5-bd-ansible-labs/issues>`_ and we will give our best effort to address it.

.. note::

   Need help with automating use cases not present here - `Open a request <https://github.com/f5devcentral/f5-bd-ansible-labs/issues>`_
