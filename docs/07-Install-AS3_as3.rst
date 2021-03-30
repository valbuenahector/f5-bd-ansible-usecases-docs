Use Case 07: Install and Enable AS3 
===================================

Prerequisites
-------------
A F5 BIG-IP instance, webservers and Ansible node are deployed. 
To deploy infrastructure in AWS users can use the
`Ansible Workshops <https://github.com/ansible/workshops>`__

Overview of Use Case
--------------------

This use case will download the latest
`AS3 RPM package <https://github.com/F5Networks/f5-appsvcs-extension/releases>`_
and install it on the BIG-IP.

Application Services 3 Extension (referred to as AS3 Extension or more often
simply AS3) is a flexible, low-overhead mechanism for managing
application-specific configurations on a BIG-IP system.

.. attention::
  
   This use case only validates that AS3 has been installed via the playbook.
   More use cases for AS3 will be added later.

Use Case Setup
--------------

1. Login to the Ansible Host 

2. Change Directory in the Ansible Host to the use-cases repo previously
   downloaded

   .. code:: bash
   
      cd ~/f5-bd-ansible-usecases/AS3/07-Install-AS3/


3. Launching the Ansible Playbook:

   .. code:: bash

      ansible-playbook Install-AS3.yaml

4. Testing and Validating

   BIG-IP - (https://F5-BIG-IP-Public-IP:8443) - get the F5-BIG-IP-Public-IP fro
   instructor_inventory file in provisioning host.

   - Login to the BIG-IP
   - Navigate to iApps --> Packet Management LX 
   - Veirfy the AS3 RPM package is installed

.. hint::
  
   Username is admin and the Password would be part of the Linklight Lab
   password or in the f5_vars.yml file used to provision the lab.
