ANSIBLE AUTOMATION FOR F5 SOLUTIONS & USE CASES
===============================================

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

.. toctree::
   :glob:
   :maxdepth: 2
   :Caption: Lab information

   Instructor_Inventory_Ansible.rst
   Instructor_Inventory_Provisioner.rst
 
.. toctree::
   :glob:
   :maxdepth: 2
   :Caption: Modules

   00-Backup-Restore-Role.rst
   01-Deploy-SSL-Enabled-App_Services.rst
   02-Replace-Application-Certificates.rst
   03-WAF-Policy-Management.rst
   04-Application-Maintenance.rst
   05-WAF-Policy-Management-Role.rst
   06-WAF-Policy-Management-JuiceShop-Roles.rst

.. toctree::
   :glob:
   :maxdepth: 2
   :caption: AS3

   00-Backup-Restore-Role_as3.rst
   01-Deploy-SSL-Enabled-App_Services_as3.rst
   02-Replace-Application-Certificates_as3.rst
   03-WAF-Policy-Management_as3.rst
   04-Application-Maintenance_as3.rst
   05-WAF-Policy-Management-Role_as3.rst
   06-WAF-Policy-Management-JuiceShop-Roles_as3.rst