Use Case 04: Application Maintenance
===========================================

OVERVIEW
--------
Application-Maintenance.yaml is a template Ansible Playbook that demonstrates the ability to change the state (enable/disable/offline) of traffic flowing to web-server(s) in a load balancing pool.

There are times where web servers are taken offline to provide upgrades, troubleshooting, or even replacement. 

This playbook allows the ability to enable, disable or offline a specific or array of pool members (e.g. [hostname]:[port] or [ip address]:[port]); This script can also affect "All" of the members of a selected pool.


RUNNING THE TEMPLATE
--------------------
Running this template assumes that a F5 BIG-IP instance, necessary webservers and Ansible node are available.  
To deploy a sandbox infrastructure in AWS users can use the `F5 Ansible Provisioner <https://github.com/f5devcentral/FAS-provisioner>`__

1. Login to the Ansible host

2. Change Directory in the Ansible Host to the use-cases repo previously downloaded

   .. code::
   
      cd ~/FAS-ansible-use-cases/04-Application-Maintenance


3. (Optional) Edit 'f5_vars.yml' file to customize your variables for your environment. 

3. Run the Ansible Playbook ‘Application-Maintenance.yaml’ with the variable file ‘f5_vars.yml’:

   .. code::

      ansible-playbook Application-Maintenance.yaml -e @f5_vars.yml

.. note::

   By default a VIP and pool will be created during the execution of the code, then the code will disable a single node in that created pool.
   Modification of the f5_vars.yml file can change the pool, node(s) and state which can be modified within the f5_vars.yml. 
   
TESTING AND VALIDATION
----------------------

This section assumes knowledge of how to operate BIG-IP commands and networking.

   - Login to the BIG-IP
   - Navigate to Local traffic->Pools. 
   - Click on the pool you selected while running the playbook
   - View the members of the pool and verify their state based on action choosen while running the playbook

